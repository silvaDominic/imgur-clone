import { Link } from "react-router";
import { ImageModel } from "@/application/models/image.model";
import { useState } from "react";
import { LoadingWidget } from "@/presentation/components/loading-widget/loading-widget";

type AlbumProps = {
  id: string,
  imgSrc: string,
  imgAltText: string,
  images: ImageModel[],
}

export function Album({id, imgSrc, imgAltText, images}: AlbumProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <LoadingWidget isLoading={isLoading}/>

      <Link
        to={`/album/${id}`}
        state={{images: images}}
      >
        <img
          crossOrigin='anonymous'
          src={imgSrc}
          alt={imgAltText}
          referrerPolicy="no-referrer"
          style={{display: isLoading ? 'none' : 'block'}}
          onLoad={() => setIsLoading(false)}
        />
      </Link>
    </>
  );
}
