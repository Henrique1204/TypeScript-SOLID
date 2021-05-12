import { CartItem } from './cart-item';

export interface ShoppingCartProtocol {
  items: Readonly<CartItem[]>;
  addItem(item: CartItem): void;
  removeItem(index: number): void;
  getTotal(): number;
  getTotalWithDicount(): number;
  isEmpty(): boolean;
  clear(): void;
}
