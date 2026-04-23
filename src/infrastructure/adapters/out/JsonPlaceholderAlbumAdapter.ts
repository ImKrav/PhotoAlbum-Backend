import { Album } from "../../../domain/entities/Album";
import { AlbumRepositoryPort } from "../../../domain/ports/out/AlbumRepositoryPort";
import { env } from "../../config/env";

interface ExternalAlbum {
  userId: number;
  id: number;
  title: string;
}

export class JsonPlaceholderAlbumAdapter implements AlbumRepositoryPort {
  async findAll(): Promise<Album[]> {
    const response = await fetch(env.ALBUMS_API_URL);

    if (!response.ok) {
      throw new Error(`Error fetching albums: ${response.status} ${response.statusText}`);
    }

    const data = (await response.json()) as ExternalAlbum[];

    return data.map((item) =>
      Album.create({
        id: item.id,
        title: item.title,
      })
    );
  }
}
