import { Album } from "../../entities/Album";

export interface AlbumRepositoryPort {
  findAll(): Promise<Album[]>;
}
