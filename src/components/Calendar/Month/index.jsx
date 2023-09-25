import React, { useContext } from "react";
import Week from "../Week";
import { addWeeks, getWeeksInMonth, startOfMonth, startOfWeek } from "date-fns";

import { DateContext } from "../../../contexts";

const Month = () => {
  const weeksArray = [];
  const { currentDate } = useContext(DateContext);
  for (let index = 0; index <= getWeeksInMonth(currentDate); index++) {
    weeksArray.push(
      <Week
        key={index}
        currentDay={currentDate}
        /* моя логіка полягає в тому, що я передаю перший день(в моєму випадку це понеділок) 
        першого тижня(понеділок може належати і до останнього тижня минулого місяця) 
        
        і за кожен цикл додається тиждень, тому я передаю в пропсах 'грубо кажучі' кожен понеділок*/
        mondayOfFirstWeekOfMonth={addWeeks(
          startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 }),
          index
        )}
      />
    );
  }
  return <>{weeksArray}</>;
};

export default Month;
