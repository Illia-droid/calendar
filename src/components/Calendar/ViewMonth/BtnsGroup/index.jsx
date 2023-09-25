import React from "react";
import styles from "./BtnsGroup.module.scss";
const BtnsGroup = ({ divMonth, addMonth }) => {
  return (
    <div className={styles.btnsGroup}>
      <button onClick={divMonth}>prev</button>
      <button onClick={addMonth}>next</button>
    </div>
  );
};

export default BtnsGroup;
