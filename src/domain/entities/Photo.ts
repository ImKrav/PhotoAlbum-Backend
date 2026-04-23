export class Photo {
  constructor(
    public readonly id: number,
    public readonly albumId: number,
    public readonly title: string,
    public readonly url: string,
    public readonly thumbnailUrl: string
  ) {}

  static create(data: {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }): Photo {
    return new Photo(data.id, data.albumId, data.title, data.url, data.thumbnailUrl);
  }
}
