import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const Day = ({ day, classes }) => {
  if (day >= 0) {
    return (
      <td key={day} className={classes}>
        {format(day, "d")}
      </td>
    );
  } else return <td></td>;
};

Day.propTypes = {
  day: PropTypes.object,
  className: PropTypes.object,
};

export default Day;
