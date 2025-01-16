import { Link } from "react-router";
import { MediaModel } from "@/application/models/media.model";
import { Media } from "@/presentation/components/media/media";

type AlbumProps = {
  id: string,
  imgSrc: string,
  imgAltText: string,
  images: MediaModel[],
}

export function AlbumLink({id, imgSrc, imgAltText, images}: AlbumProps) {

  return (
    <>
      <Link
        to={`/album/${id}`}
        state={{images: images}}
      >
        <Media
          src={imgSrc}
          alt={imgAltText}
        />
      </Link>
    </>
  );
}
