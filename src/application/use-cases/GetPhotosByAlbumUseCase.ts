import { GetPhotosByAlbumPort } from "../../domain/ports/in/GetPhotosByAlbumPort";
import { PhotoRepositoryPort } from "../../domain/ports/out/PhotoRepositoryPort";
import { PhotoResponseDto } from "../dtos/PhotoResponseDto";

export class GetPhotosByAlbumUseCase implements GetPhotosByAlbumPort {
  constructor(private readonly photoRepository: PhotoRepositoryPort) {}

  async execute(albumId?: number): Promise<PhotoResponseDto[]> {
    const photos =
      albumId !== undefined
        ? await this.photoRepository.findByAlbumId(albumId)
        : await this.photoRepository.findAll();

    return photos.map(PhotoResponseDto.fromDomain);
  }
}
