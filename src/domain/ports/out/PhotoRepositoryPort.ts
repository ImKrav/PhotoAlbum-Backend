import { Photo } from "../../entities/Photo";

export interface PhotoRepositoryPort {
  findAll(): Promise<Photo[]>;
  findByAlbumId(albumId: number): Promise<Photo[]>;
}
