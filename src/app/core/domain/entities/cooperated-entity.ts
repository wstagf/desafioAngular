import { DomainEntity } from '../common/domain-entity';
import { StatusCPFTypeEnun } from '../enuns/status-cpf-enun';
import { AccountEntity } from './account-entity';

export class CoperatedEntity extends DomainEntity {
  cpf: string|null = null;
  name: string|null  = null;
  statusCPF: StatusCPFTypeEnun|null = null;
  accounts: AccountEntity[] = []
}
