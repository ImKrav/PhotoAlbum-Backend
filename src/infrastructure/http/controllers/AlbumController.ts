import { Request, Response, NextFunction } from "express";
import { GetAlbumsPort } from "../../../domain/ports/in/GetAlbumsPort";

export class AlbumController {
  constructor(private readonly getAlbumsUseCase: GetAlbumsPort) {}

  async getAll(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const albums = await this.getAlbumsUseCase.execute();
      res.json(albums);
    } catch (error) {
      next(error);
    }
  }
}
