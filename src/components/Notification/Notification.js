import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <Message>
      <span>{message}</span>
    </Message>
  );
};

Notification.protoType = {
  message: PropTypes.string.isRequired,
};
