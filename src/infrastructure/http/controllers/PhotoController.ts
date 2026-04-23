import { Request, Response, NextFunction } from "express";
import { GetPhotosByAlbumPort } from "../../../domain/ports/in/GetPhotosByAlbumPort";
import { InvalidParameterException } from "../../../domain/exceptions/InvalidParameterException";

export class PhotoController {
  constructor(private readonly getPhotosByAlbumUseCase: GetPhotosByAlbumPort) {}

  async getByAlbum(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const albumIdParam = req.query.albumId;
      let albumId: number | undefined;

      if (albumIdParam !== undefined) {
        albumId = Number(albumIdParam);
        if (isNaN(albumId)) {
          throw new InvalidParameterException("albumId", "debe ser un número válido");
        }
      }

      const photos = await this.getPhotosByAlbumUseCase.execute(albumId);
      res.json(photos);
    } catch (error) {
      next(error);
    }
  }
}
