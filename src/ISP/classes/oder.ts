import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCartLSP } from './shopping-cart-lsp';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'OPEN';

  constructor(
    private readonly cart: ShoppingCartLSP,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder
  ) {}

  public get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  public set orderStatus(value: OrderStatus) {
    this._orderStatus = value;
  }

  public checkout = (): void => {
    if (this.cart.isEmpty()) return console.log('Seu carrinho está vazio!');

    this.orderStatus = 'CLOSED';
    this.messaging.sendMessage(
      `Seu pedido com total de R$ ${this.cart.getTotalWithDicount()} foi recebido.`
    );
    this.persistency.saveOrder();
    this.cart.clear();

    console.log(
      `O cliente é: ${this.customer.getName()} | ${this.customer.getIDN()}`
    );
  };
}
