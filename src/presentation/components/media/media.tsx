import { LoadingWidget } from "@/presentation/components/loading-widget/loading-widget";
import { useState } from "react";

type ImageProps = {
  src: string,
  alt: string,
  isVideo?: boolean,
}

export function Media({src, alt, isVideo = false}: ImageProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <>
      <LoadingWidget isLoading={isLoading}/>

      {
        isVideo
          ? <video
            width="100%"
            autoPlay
            loop
            muted>
            <source
              src={src}
              type="video/mp4"
              referrerPolicy="no-referrer"/>
          </video>
          : <img
            src={src}
            alt={alt}
            crossOrigin='anonymous'
            referrerPolicy="no-referrer"
            style={{display: isLoading ? 'none' : 'block'}}
            onLoad={() => setIsLoading(false)}
          />
      }
    </>
  );
}
