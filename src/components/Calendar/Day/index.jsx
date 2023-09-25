import React from "react";
// import PropTypes from "prop-types";
import { format } from "date-fns";

const Day = ({ day, className }) => {
  if (day >= 0) {
    return (
      <td key={day} className={className}>
        {format(day, "d")}
      </td>
    );
  } else return <td></td>;
};

Day.propTypes = {};

export default Day;
