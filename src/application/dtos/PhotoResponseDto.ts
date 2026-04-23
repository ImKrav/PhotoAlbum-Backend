export class PhotoResponseDto {
  constructor(
    public readonly id: number,
    public readonly albumId: number,
    public readonly title: string,
    public readonly url: string,
    public readonly thumbnailUrl: string
  ) {}

  static fromDomain(data: {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }): PhotoResponseDto {
    return new PhotoResponseDto(
      data.id,
      data.albumId,
      data.title,
      data.url,
      data.thumbnailUrl
    );
  }
}
