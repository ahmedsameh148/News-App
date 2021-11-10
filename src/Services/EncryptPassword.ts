import cryptojs from "crypto-js";

export class EncryptPassword {
  private plainPassword: string = "";

  setPlainPassword(password: string): this {
    this.plainPassword = password;
    return this;
  }

  encrypt(): string {
    return cryptojs.SHA512(this.plainPassword).toString();
  }
}
