import React, { useContext } from "react";
import { format } from "date-fns";
import Month from "../Month";
import styles from "./ViewMonth.module.scss";
import BtnsGroup from "./BtnsGroup";
import { DateContext } from "../../../contexts";

const ViewMonth = () => {
  const namesDays = ["m", "t", "w", "t", "f", "s", "s"];
  const renderDaysNames = (name, i) => (
    <th key={i} className={styles.letters}>
      {name}
    </th>
  );
  const { currentDate } = useContext(DateContext);
  return (
    <section className={styles.sectionViewMonth}>
      <div className={styles.divForPosition}>
        <h2>{format(currentDate, "MMMM y")}</h2>
        <BtnsGroup />
        <table className={styles.table}>
          <thead>
            <tr>{namesDays.map(renderDaysNames)}</tr>
          </thead>
          <tbody>
            <Month />
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ViewMonth;
