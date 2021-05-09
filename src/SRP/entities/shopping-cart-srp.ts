import { CartItem } from './interfaces/cart-item';

// Uma classe "boa" é que só tem métodos que utilizam suas propriedades.
export class ShoppingCartSRP {
  private readonly _items: CartItem[] = [];

  public get items(): Readonly<CartItem[]> {
    return this._items;
  }

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

  public clear = (): void => {
    console.log('O carrinho foi limpo.');
    this._items.length = 0;
  };
}
