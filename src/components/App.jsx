import { useState } from 'react';
import Statistics from './FeedbackComponents/Statistics';
import FeedbackOptions from './FeedbackComponents/FeedbackOptions';
import Section from './Section/Section';
import Notification from './FeedbackComponents/Notification';
import { Box } from './Box/Box';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickOnBtn = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };
  const countPositiveFeedbackPercentage = () => {
    return `${Math.round((good / countTotalFeedback()) * 100) || 0}%`;
  };

  const countNegativeFeedbackPercentage = () => {
    return `${Math.round((bad / countTotalFeedback()) * 100) || 0}%`;
  };
  return (
    <Box as="main" px={5}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={clickOnBtn}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            negativePercentage={countNegativeFeedbackPercentage()}
          />
        ) : (
          <Notification text="There is no feedback" />
        )}
      </Section>
    </Box>
  );
};