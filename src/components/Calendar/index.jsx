import React, { useState } from "react";
import { addMonths } from "date-fns";
import ViewDay from "./ViewDay";
import ViewMonth from "./ViewMonth";

import styles from "./Calendar.module.scss";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const addMonth = () => {
    setCurrentDate((prevMonth) => addMonths(prevMonth, 1));
  };

  const divMonth = () => {
    setCurrentDate((prevMonth) => addMonths(prevMonth, -1));
  };

  return (
    <section className={styles.section}>
      <ViewDay currentDate={today} />
      <ViewMonth
        currentDate={currentDate}
        divMonth={divMonth}
        addMonth={addMonth}
      />
    </section>
  );
};

export default Calendar;
