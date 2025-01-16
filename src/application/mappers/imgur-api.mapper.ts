import { AlbumModel } from "@/application/models/album.model";
import { ImageModel } from "@/application/models/image.model";

export function dtoToAlbumModel(dto: any) {
  if (!dto) {
    throw new Error('Invalid DTO.');
  }

  try {
    return new AlbumModel(
      dto.id,
      dto.title,
      dto.cover,
      (dto.images || []).map((imageDto: any) => dtoToImageModel(imageDto)),
    )
  } catch (err) {
    console.error('Error mapping DTO to Album Model:', err);
    throw err;
  }
}

export function dtoToImageModel(dto: any) {
  if (!dto) {
    throw new Error('Invalid DTO.');
  }

  try {
    return new ImageModel(
      dto.id,
      dto.title,
      dto.description,
      dto.link,
      !!dto.mp4,
    )
  } catch (err) {
    console.error('Error mapping DTO to Image Model:', err);
    throw err;
  }
}
