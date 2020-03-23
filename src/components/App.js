import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import styles from "./App.module.css";

export default class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
    onLeaveFeedback: false
  };

  hadleIncrement = e => {
    const currentFeedback = e.currentTarget.textContent.toLowerCase();

    if (!this.onLeaveFeedback) {
      this.setState({ onLeaveFeedback: true });
    }

    this.setState(state => ({
      [currentFeedback]: state[currentFeedback] + 1
    }));

    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({
      total: good + neutral + bad
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => ({
      positivePercentage: Math.round((good * 100) / total)
    }));
  };

  render() {
    const {
      good,
      neutral,
      bad,
      total,
      positivePercentage,
      onLeaveFeedback
    } = this.state;
    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.hadleIncrement}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
            onLeaveFeedback={onLeaveFeedback}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
