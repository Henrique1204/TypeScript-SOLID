import { DiscountProtocol } from './interfaces/discount-protocol';

export class FiftyPercentDiscount extends DiscountProtocol {
  protected discount = 0.5;
}

export class TenPercentDiscount extends DiscountProtocol {
  protected discount = 0.1;
}

export class NoDiscount extends DiscountProtocol {}
