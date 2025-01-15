import { ImageModel } from "@/application/models/image.model";

export class AlbumModel {
  constructor(
    public id: string,
    public title: string,
    public coverImageId: string,
    public images: ImageModel[],
  ) {
  }
}
