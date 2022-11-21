import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Section/Section.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  Object.keys(options).map(option => (
    <Button
      type="button"
      name={option}
      onClick={() => onLeaveFeedback(option)}
      key={option}
      className={option}
    >
      {option}
    </Button>
  ));

export default FeedbackOptions;

FeedbackOptions.prototype = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};