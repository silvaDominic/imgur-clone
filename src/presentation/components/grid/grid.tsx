import { PropsWithChildren, ReactElement } from "react";

import './grid.css';

export function Grid(props: PropsWithChildren<{}>): ReactElement {
  return (
    <div className="grid">
      {props.children}
    </div>
  );
}
