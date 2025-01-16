import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { ImageModel } from "@/application/models/image.model";

import './gallery.styles.css';
import { Lightbox } from "@/presentation/components/lightbox/lightbox";

export function GalleryPage() {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const images = location.state?.images || null;

  useEffect(() => {
    console.log(id);
    console.log(images);
  }, [images]);

  return (
    <div className='image-container'>
        {
          images?.map((image: ImageModel) => (
            <div className='image' key={image.id}>
              <Lightbox>
              {
                image.isVideo
                  ? <video
                    width="100%"
                    autoPlay
                    loop
                    muted>
                      <source
                        src={image.link}
                        type="video/mp4"
                        referrerPolicy="no-referrer"/>
                    </video>
                  : <img
                    src={image.link}
                    alt={image.title}
                    referrerPolicy="no-referrer"
                  />
              }
              </Lightbox>
            </div>
          ))
        }
    </div>
  )
}
