import React, { Component } from 'react';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Section } from '../components/Section/Section';
import { Notification } from '../components/Notification/Notification';
import { FeedStatistics } from '../components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total ? ((good / total) * 100).toFixed(1) : 0;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <FeedStatistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
