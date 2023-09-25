import React from "react";
import Day from "../Day";
import cx from "classnames";
import { addDays, isSameMonth, isToday } from "date-fns";
import styles from "./Week.module.scss";

const Week = ({ currentDay, mondayOfFirstWeekOfMonth }) => {
  const daysArray = [];
  for (let index = 0; index < 7; index++) {
    let day = addDays(mondayOfFirstWeekOfMonth, index);

    const stylesForDay = cx(styles.day, { [styles.currentDay]: isToday(day) });

    if (isSameMonth(day, currentDay)) {
      daysArray.push(<Day key={index} day={day} classes={stylesForDay} />);
    } else {
      daysArray.push(<Day key={index} />);
    }
  }
  return <tr>{daysArray}</tr>;
};

export default Week;
