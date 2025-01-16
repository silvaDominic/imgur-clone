import { Link } from "react-router";
import { ImageModel } from "@/application/models/image.model";

type AlbumProps = {
  id: string,
  imgSrc: string,
  imgAltText: string,
  images: ImageModel[],
}


export function Album({id, imgSrc, imgAltText, images}: AlbumProps) {
  return (
    <Link
      to={`/album/${id}`}
      state={{images: images}}
    >
      <img
        crossOrigin='anonymous'
        src={imgSrc}
        alt={imgAltText}
        referrerPolicy="no-referrer"
      />
    </Link>
  );
}
