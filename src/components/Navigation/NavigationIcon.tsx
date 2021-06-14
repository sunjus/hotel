import React, { ReactElement } from "react";

import Styles from "./NavigationIcon.module.scss";

export default function NavigationIcon(): ReactElement {
  return (
    <div className={Styles.NavigationIcon}>
      <h3>HOTEL</h3>
    </div>
  );
}