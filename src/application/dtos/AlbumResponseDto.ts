export class AlbumResponseDto {
  constructor(
    public readonly id: number,
    public readonly title: string
  ) {}

  static fromDomain(data: { id: number; title: string }): AlbumResponseDto {
    return new AlbumResponseDto(data.id, data.title);
  }
}
