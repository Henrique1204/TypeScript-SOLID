import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder {
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string
  ) {}

  public getName = (): string => `${this.firstName} ${this.lastName}`;

  public getIDN = (): string => this.cpf;
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder {
  constructor(public name: string, public cnpj: string) {}

  public getName = (): string => this.name;

  public getIDN = (): string => this.cnpj;
}
