import { PersistencyProtocol } from '../classes/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  public saveOrder = (): void => console.log('Seu pedido foi salvo.');
}
