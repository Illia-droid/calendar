import { addMonths } from "date-fns";
import { useState } from "react";

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const addMonth = () => {
    setCurrentDate((prevMonth) => addMonths(prevMonth, 1));
  };

  const divMonth = () => {
    setCurrentDate((prevMonth) => addMonths(prevMonth, -1));
  };
  return { currentDate, addMonth, divMonth };
};

export default useCalendar;