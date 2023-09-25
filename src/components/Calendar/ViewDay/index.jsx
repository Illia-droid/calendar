import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns/esm";
import styles from "./ViewDay.module.scss";
const ViewDay = ({ currentDate }) => {
  return (
    <article className={styles.articleViewDay}>
      <h3 > {format(currentDate, "eeee")}</h3>
      <h2 className={styles.articleViewDay__h2}> {format(currentDate, "d")}</h2>
    </article>
  );
};
ViewDay.propTypes = {
  date: PropTypes.object,
};
export default ViewDay;
