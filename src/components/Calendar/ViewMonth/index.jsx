import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import Month from "../Month";
import styles from "./ViewMonth.module.scss";
import BtnsGroup from "./BtnsGroup";

const namesDays = ["m", "t", "w", "t", "f", "s", "s"];

const ViewMonth = ({ currentDate, divMonth, addMonth }) => {
  const renderDaysNames = (name, i) => <th key={i} className={styles.litters}>{name} </th>;

  return (
    <section className={styles.sectionViewMonth}>
      <div className={styles.divForPosition}>
        <h2>{format(currentDate, "MMMM y")}</h2>
        <BtnsGroup divMonth={divMonth} addMonth={addMonth} />
        <table className={styles.table}>
          <thead>
            <tr style={{ color: "#e61f58" }}>
              {namesDays.map(renderDaysNames)}
            </tr>
          </thead>
          <tbody>
            <Month currentDate={currentDate} />
          </tbody>
        </table>
      </div>
    </section>
  );
};

ViewMonth.propTypes = {
  date: PropTypes.object,
};

export default ViewMonth;
