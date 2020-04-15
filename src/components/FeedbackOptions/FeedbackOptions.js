import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options }) => (
  <>
    <h2>Please leave feedback</h2>
    <button type="button" onClick={options}>
      Good
    </button>
    <button type="button" onClick={options}>
      Neutral
    </button>
    <button type="button" onClick={options}>
      Bad
    </button>
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired,
};

export default FeedbackOptions;
