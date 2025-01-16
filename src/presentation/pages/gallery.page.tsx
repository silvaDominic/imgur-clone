import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import { MediaModel } from "@/application/models/media.model";

import './gallery.styles.css';
import { Lightbox } from "@/presentation/components/lightbox/lightbox";
import { Media } from "@/presentation/components/image/media";

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
          images?.map((image: MediaModel) => (
            <div className='image' key={image.id}>
              <Lightbox>
                <Media
                  src={image.link}
                  alt={image.title}
                  isVideo={image.isVideo}
                />
              </Lightbox>
            </div>
          ))
        }
    </div>
  )
}
