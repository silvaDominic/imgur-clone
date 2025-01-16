import { Link } from "react-router";
import { MediaModel } from "@/application/models/media.model";
import { useState } from "react";
import { LoadingWidget } from "@/presentation/components/loading-widget/loading-widget";
import { Media } from "@/presentation/components/image/media";

type AlbumProps = {
  id: string,
  imgSrc: string,
  imgAltText: string,
  images: MediaModel[],
}

export function Album({id, imgSrc, imgAltText, images}: AlbumProps) {

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
