import { DomainException } from "./DomainException";

export class InvalidParameterException extends DomainException {
  constructor(parameter: string, reason: string) {
    super(`Parámetro inválido '${parameter}': ${reason}`, 400);
  }
}
