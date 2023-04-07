import PropTypes from 'prop-types';
import FeedbackCss from './Feedback.module.css';

export const FeedbackOptions = ({ onClicker }) => {
  return (
    <div className={FeedbackCss.feedback}>
      <button className={FeedbackCss.btn} type="button" name="Good" onClick={onClicker}>
        Good
      </button>
      <button className={FeedbackCss.btn} type="button" name="Neutral" onClick={onClicker}>
        Neutral
      </button>
      <button className={FeedbackCss.btn} type="button" name="Bad" onClick={onClicker}>
        Bad
      </button>
    </div>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
