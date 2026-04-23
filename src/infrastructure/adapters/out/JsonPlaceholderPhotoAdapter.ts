import { Photo } from "../../../domain/entities/Photo";
import { PhotoRepositoryPort } from "../../../domain/ports/out/PhotoRepositoryPort";
import { env } from "../../config/env";

interface ExternalPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export class JsonPlaceholderPhotoAdapter implements PhotoRepositoryPort {
  async findAll(): Promise<Photo[]> {
    return this.fetchPhotos(env.PHOTOS_API_URL);
  }

  async findByAlbumId(albumId: number): Promise<Photo[]> {
    return this.fetchPhotos(`${env.PHOTOS_API_URL}?albumId=${albumId}`);
  }

  private async fetchPhotos(url: string): Promise<Photo[]> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching photos: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as ExternalPhoto[];

    return data.map((item) =>
      Photo.create({
        id: item.id,
        albumId: item.albumId,
        title: item.title,
        url: `https://picsum.photos/seed/photo-${item.id}/600/600`,
        thumbnailUrl: `https://picsum.photos/seed/photo-${item.id}/200/200`,
      })
    );
  }
}
