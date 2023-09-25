import React from "react";

import ViewDay from "./ViewDay";
import ViewMonth from "./ViewMonth";

import styles from "./Calendar.module.scss";
import { DateContext } from "../../contexts";
import { useCalendar } from "../../hooks";

const Calendar = () => {
  const { currentDate, addMonth, divMonth } = useCalendar();
  return (
    <DateContext.Provider value={{ currentDate, addMonth, divMonth }}>
      <section className={styles.section}>
        <ViewDay />
        <ViewMonth />
      </section>
    </DateContext.Provider>
  );
};

export default Calendar;
