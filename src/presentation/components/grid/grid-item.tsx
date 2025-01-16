import { PropsWithChildren, ReactElement } from "react";

export function GridItem(props: PropsWithChildren<{}>): ReactElement {
  return (
    <>
      <div className='grid-item'>
        { props.children }
      </div>
    </>
  );
}
