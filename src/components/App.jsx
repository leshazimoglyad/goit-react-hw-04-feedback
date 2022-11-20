//import styled from 'styled-components';
import { Component } from 'react';
import Statistics from './FeedbackComponents/Statistics';
import FeedbackOptions from './FeedbackComponents/FeedbackOptions';
import Section from './Section/Section';
import Notification from './FeedbackComponents/Notification';
import { Box } from './Box/Box';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickOnBtn = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, feedback) => {
      return acc + feedback;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return `${
      Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0
    }%`;
  };

  countNegativeFeedbackPercentage = () => {
    return `${
      Math.round((this.state.bad / this.countTotalFeedback()) * 100) || 0
    }%`;
  };

  render() {
    return (
      <Box as="main" px={5}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.clickOnBtn}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
              negativePercentage={this.countNegativeFeedbackPercentage()}
            />
          ) : (
            <Notification text="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}