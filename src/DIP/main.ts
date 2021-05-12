import { Messaging } from './services/messaging';
import { Order } from './classes/oder';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCartDIP } from './classes/shopping-cart-dip';
import { NoDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

// Dependências ShoppingCart.
const noDiscount = new NoDiscount();

// Criação do carrinho.
const shoppingCart = new ShoppingCartDIP(noDiscount);

shoppingCart.addItem(new Product('Camisa', 19.91234));
shoppingCart.addItem(new Product('Calça', 79.9));
shoppingCart.addItem(new Product('Sapato', 50));
shoppingCart.addItem(new Product('Boné', 100));

// Dependências Order.
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer('Paulo', 'Souza', '222');

// Criando pedido.
const order = new Order(shoppingCart, messaging, persistency, customer);
order.checkout();
console.log(order.orderStatus);
