import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/Section/Section.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  Object.keys(options).map(item => (
    <Button
      type="button"
      name={item}
      onClick={() => onLeaveFeedback(item)}
      key={item}
      className={item}
    >
      {item}
    </Button>
  ));

export default FeedbackOptions;

FeedbackOptions.prototype = {
  options: PropTypes.objectOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};