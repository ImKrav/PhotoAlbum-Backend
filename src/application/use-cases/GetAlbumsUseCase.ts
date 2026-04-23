import { GetAlbumsPort } from "../../domain/ports/in/GetAlbumsPort";
import { AlbumRepositoryPort } from "../../domain/ports/out/AlbumRepositoryPort";
import { AlbumResponseDto } from "../dtos/AlbumResponseDto";

export class GetAlbumsUseCase implements GetAlbumsPort {
  constructor(private readonly albumRepository: AlbumRepositoryPort) {}

  async execute(): Promise<AlbumResponseDto[]> {
    const albums = await this.albumRepository.findAll();
    return albums.map(AlbumResponseDto.fromDomain);
  }
}
