import React from 'react';
import PropTypes from 'prop-types';
import { P } from 'components/Section/Section.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  negativePercentage,
}) => (
  <div>
    <P>Good: {good}</P>
    <P>Neutral: {neutral}</P>
    <P>Bad: {bad}</P>
    <P>Total: {total}</P>
    <P>Positive feedback: {positivePercentage}</P>
    <P>Negative feedback: {negativePercentage}</P>
  </div>
);

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  negativePercentage: PropTypes.number.isRequired,
};

export default Statistics;