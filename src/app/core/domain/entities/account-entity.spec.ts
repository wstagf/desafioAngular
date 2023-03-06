import { AccountTypeEnun } from "../enuns/account-type-enun";
import { AccountEntity } from "./account-entity";

describe('AccountEntity', () => {
  it('should create an instance off Account Current', () => {
    expect(new AccountEntity("0000", AccountTypeEnun.current)).toBeTruthy();
  });

  it('should create an instance off Account Savings', () => {
    expect(new AccountEntity("0000", AccountTypeEnun.saving)).toBeTruthy();
  });
});
