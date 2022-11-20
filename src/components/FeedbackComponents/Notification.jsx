import React from 'react';
import PropTypes from 'prop-types';
import { Warning } from 'components/Section/Section.styled';

const Notification = ({ text }) => <Warning>{text}</Warning>;

export default Notification;

Notification.prototype = {
  text: PropTypes.string,
};