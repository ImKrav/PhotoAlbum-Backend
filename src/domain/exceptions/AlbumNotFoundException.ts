import { DomainException } from "./DomainException";

export class AlbumNotFoundException extends DomainException {
  constructor(albumId: number) {
    super(`Album con id ${albumId} no fue encontrado`, 404);
  }
}
