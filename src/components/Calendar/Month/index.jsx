import React from "react";
import Week from "../Week";
import {
  addMonths,
  addWeeks,
  getWeeksInMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";

const Month = ({ currentDate }) => {
  const weeksArray = [];

  for (let index = 0; index <= getWeeksInMonth(currentDate); index++) {
    console.log("addMonths ", addMonths(currentDate, 1));
    weeksArray.push(
      <Week
        today={currentDate}
        currentDate={addWeeks(
          startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 }),
          index
        )}
      />
    );
  }
  return <>{weeksArray}</>;
};

export default Month;
