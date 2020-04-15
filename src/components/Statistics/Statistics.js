import React from "react";
import PropTypes from "prop-types";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  onLeaveFeedback,
}) =>
  onLeaveFeedback ? (
    <>
      <h2>Statistics</h2>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </>
  ) : (
    <p>No feedback given</p>
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.bool.isRequired,
};

export default Statistics;
