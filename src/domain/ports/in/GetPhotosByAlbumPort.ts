import { PhotoResponseDto } from "../../../application/dtos/PhotoResponseDto";

export interface GetPhotosByAlbumPort {
  execute(albumId?: number): Promise<PhotoResponseDto[]>;
}
