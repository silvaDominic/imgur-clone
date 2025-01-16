import { AlbumModel } from "@/application/models/album.model";
import { MediaModel } from "@/application/models/media.model";

export function dtoToAlbumModel(dto: any) {
  if (!dto) {
    throw new Error('Invalid DTO.');
  }

  try {
    return new AlbumModel(
      dto.id,
      dto.title,
      dto.cover,
      (dto.images || []).map((imageDto: any) => dtoToMediaModel(imageDto)),
    )
  } catch (err) {
    console.error('Error mapping DTO to Album Model:', err);
    throw err;
  }
}

export function dtoToMediaModel(dto: any) {
  if (!dto) {
    throw new Error('Invalid DTO.');
  }

  try {
    return new MediaModel(
      dto.id,
      dto.title,
      dto.description,
      dto.link,
      !!dto.mp4,
    )
  } catch (err) {
    console.error('Error mapping DTO to Media Model:', err);
    throw err;
  }
}
