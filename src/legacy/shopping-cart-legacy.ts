type CartItem = {
  name: string;
  price: number;
};

type OrderStatus = 'OPEN' | 'CLOSED';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _oderStatus: OrderStatus = 'OPEN';

  // Getters
  public get items(): Readonly<CartItem[]> {
    return this._items;
  }

  public get orderStatus(): OrderStatus {
    return this._oderStatus;
  }

  // Methods
  public addItem = (item: CartItem): void => {
    this._items.push(item);
  };

  public removeItem = (index: number): void => {
    this._items.splice(index, 1);
  };

  public getTotal = (): number => {
    const sum = this.items
      .reduce((acc, { price }) => acc + price, 0)
      .toFixed(2);
    return Number(sum);
  };

  public isEmpty = (): boolean => !this._items.length;

  public sendMessage = (msg: string): void =>
    console.log(`MENSAGEM ENVIADA: ${msg}`);

  public saveOrder = (): void => console.log('Seu pedido foi salvo.');

  public clear = (): void => {
    console.log('O carrinho foi limpo...');
    this._items.length = 0;
  };

  public checkout = (): void => {
    if (this.isEmpty()) return console.log('Seu carrinho está vazio!');

    this._oderStatus = 'CLOSED';
    this.sendMessage(
      `Seu pedido com total de R$ ${this.getTotal()} foi recebido.`
    );
    this.saveOrder();
    this.clear();
  };
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: 'Camisa', price: 19.91234 });
shoppingCart.addItem({ name: 'Calça', price: 79.9 });
shoppingCart.addItem({ name: 'Sapato', price: 50 });
shoppingCart.addItem({ name: 'Boné', price: 100 });

console.log(shoppingCart.orderStatus);
shoppingCart.checkout();
console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);
