import { ReactElement } from "react";

import './loading-widget.css';

type LoadingWidthProps = {
  isLoading: boolean,
}

export function LoadingWidget({isLoading}: LoadingWidthProps): ReactElement {
  return (
    <>
      { isLoading && <div className='loader'><span></span></div> }
    </>
  );
}
