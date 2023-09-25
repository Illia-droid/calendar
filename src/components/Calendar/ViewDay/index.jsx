import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns/esm";
import styles from "./ViewDay.module.scss";
const ViewDay = () => {
  const today = new Date();
  return (
    <article className={styles.articleViewDay}>
      <h3> {format(today, "eeee")}</h3>
      <h2 className={styles.articleViewDay__h2}> {format(today, "d")}</h2>
    </article>
  );
};
ViewDay.propTypes = {
  date: PropTypes.object,
};
export default ViewDay;
