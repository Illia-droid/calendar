import React from "react";
import Day from "../Day";
import cx from "classnames";
import { addDays, isSameMonth, isToday } from "date-fns";
import styles from "./Week.module.scss";

const Week = ({ today, currentDate }) => {
  const daysArray = [];
  for (let index = 0; index < 7; index++) {
    let day = addDays(currentDate, index);

    const stylesForDay = cx(styles.day, { [styles.today]: isToday(day) });

    if (isSameMonth(day, today)) {
      daysArray.push(<Day key={index} day={day} className={stylesForDay} />);
    } else {
      daysArray.push(<Day key={index} />);
    }
  }
  return <tr>{daysArray}</tr>;
};

export default Week;
