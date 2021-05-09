import { Messaging } from './services/messaging';
import { Order } from './entities/oder';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCartSRP } from './entities/shopping-cart-srp';

// Criação do carrinho.
const shoppingCart = new ShoppingCartSRP();

shoppingCart.addItem(new Product('Camisa', 19.91234));
shoppingCart.addItem(new Product('Calça', 79.9));
shoppingCart.addItem(new Product('Sapato', 50));
shoppingCart.addItem(new Product('Boné', 100));

// Dependências.
const messaging = new Messaging();
const persistency = new Persistency();

// Criando pedido.
const order = new Order(shoppingCart, messaging, persistency);
order.checkout();
console.log(order.orderStatus);
