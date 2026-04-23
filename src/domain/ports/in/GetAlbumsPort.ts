import { AlbumResponseDto } from "../../../application/dtos/AlbumResponseDto";

export interface GetAlbumsPort {
  execute(): Promise<AlbumResponseDto[]>;
}
