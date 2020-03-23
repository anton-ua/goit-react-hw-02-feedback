import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ options }) => (
  <Fragment>
    <button type="button" onClick={options}>
      Good
    </button>
    <button type="button" onClick={options}>
      Neutral
    </button>
    <button type="button" onClick={options}>
      Bad
    </button>
  </Fragment>
);

FeedbackOptions.propTypes = {
  options: PropTypes.func.isRequired
};

export default FeedbackOptions;
