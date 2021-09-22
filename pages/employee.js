import styles from "../styles/EOM.module.css";
import { Toolbar } from "../components/toolbar";

import React from "react";

export default function Employee() {
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Employee Of The Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>{"sam"}</h3>
          <h6>{"swe"}</h6>
          <img src={""} alt="employee" />
          <p>{"deam big cicho"}</p>
        </div>
      </div>
    </div>
  );
}
