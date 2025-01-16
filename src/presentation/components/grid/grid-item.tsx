import { ReactElement } from "react";

type GridItemProps = {
  imgSrc: string,
  imgAltText: string,
}

export function GridItem({imgSrc, imgAltText, title}: GridItemProps): ReactElement {
  return (
    <>
      <div className='grid-item'>
        <img
          crossOrigin='anonymous'
          src={imgSrc}
          alt={imgAltText}
        />
      </div>
    </>
  );
}
