import PropTypes from 'prop-types';
import MessageCss from '../Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={MessageCss.message}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
