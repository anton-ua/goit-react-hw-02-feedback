import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import styles from "./App.module.css";

export default class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    onLeaveFeedback: false,
  };

  handleIncrement = (option) => {
    if (!this.onLeaveFeedback) {
      this.setState({ onLeaveFeedback: true });
    }

    this.setState((state) => ({
      [option]: state[option] + 1,
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({
      positivePercentage: Math.round((good * 100) / total),
    }));
  };

  render() {
    const {
      good,
      neutral,
      bad,
      total,
      positivePercentage,
      onLeaveFeedback,
    } = this.state;

    return (
      <div className={styles.container}>
        <FeedbackOptions handleIncrement={this.handleIncrement} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
          onLeaveFeedback={onLeaveFeedback}
        />
      </div>
    );
  }
}
