import React, { useContext } from "react";
import styles from "./BtnsGroup.module.scss";
import { DateContext } from "../../../../contexts";
const BtnsGroup = () => {
  const {divMonth, addMonth} = useContext(DateContext);
  return (
    <div className={styles.btnsGroup}>
      <button onClick={divMonth}>prev</button>
      <button onClick={addMonth}>next</button>
    </div>
  );
};

export default BtnsGroup;
