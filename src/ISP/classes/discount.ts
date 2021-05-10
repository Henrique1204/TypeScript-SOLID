import { parseFloat } from '../services/parseFloat';

export abstract class Discount {
  protected discount = 0;

  public calculate = (price: number): number =>
    parseFloat(price - price * this.discount);
}

export class FiftyPercentDiscount extends Discount {
  protected discount = 0.5;
}

export class TenPercentDiscount extends Discount {
  protected discount = 0.1;
}

export class NoDiscount extends Discount {}
