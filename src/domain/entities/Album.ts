export class Album {
  constructor(
    public readonly id: number,
    public readonly title: string
  ) {}

  static create(data: { id: number; title: string }): Album {
    return new Album(data.id, data.title);
  }
}
