import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ handleIncrement }) => (
  <>
    <h2>Please leave feedback</h2>
    <button type="button" onClick={() => handleIncrement("good")}>
      Good
    </button>
    <button type="button" onClick={() => handleIncrement("neutral")}>
      Neutral
    </button>
    <button type="button" onClick={() => handleIncrement("bad")}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
};

export default FeedbackOptions;
