import React from "react";
import Day from "../Day";
import cx from "classnames";
import { addDays, isSameMonth, isToday } from "date-fns";
import styles from "./Week.module.scss";

const Week = ({ currentDay, firstDayOfWeek }) => {
  const daysArray = [];
  for (let index = 0; index < 7; index++) {
    /*тут я починаю заповнювати тижні днями, починаючи з того самого понеділка, 
    котрий може належати до останнього тижня МИНУЛОГО місяця, та закінчую заповнення днями, які можуть належати
    вже до НАСТУПНОГО місяца*/
    let day = addDays(firstDayOfWeek, index);
    const stylesForDay = cx(styles.day, { [styles.currentDay]: isToday(day) });
    /* тут я перевіряю чи належить день до ПОТОЧНОГО місяця, і якщо true то пушу до масива*/
    if (isSameMonth(day, currentDay)) {
      daysArray.push(<Day key={index} day={day} classes={stylesForDay} />);
    } else {
      daysArray.push(<Day key={index} />);
    }
  }
  return <tr>{daysArray}</tr>;
};

export default Week;
