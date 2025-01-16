export class MediaModel {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public link: string,
    public isVideo: boolean,
  ) {
  }
}
