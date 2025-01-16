import { MediaModel } from "@/application/models/media.model";

export class AlbumModel {
  constructor(
    public id: string,
    public title: string,
    public coverImageId: string,
    public images: MediaModel[],
  ) {
  }
}
