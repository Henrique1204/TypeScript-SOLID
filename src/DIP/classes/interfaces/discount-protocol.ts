import { parseFloat } from '../../services/parseFloat';

export abstract class DiscountProtocol {
  protected discount = 0;

  public calculate = (price: number): number =>
    parseFloat(price - price * this.discount);
}
