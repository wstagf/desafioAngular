import { DomainEntity } from '../common/domain-entity';
import { AccountTypeEnun } from '../enuns/account-type-enun';

export class AccountEntity extends DomainEntity {
  number: string|null = null; 
  type: AccountTypeEnun|null = null;

  constructor(numberOfAccount: string, typeOffAccount: AccountTypeEnun) {
    super();
    this.number = numberOfAccount;
    this.type = typeOffAccount;
  }
}
