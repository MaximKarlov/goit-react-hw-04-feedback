import PropTypes from 'prop-types';
import FeedbackCss from './Feedback.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={FeedbackCss.feedback}>
      <div>
        {options.map(name => {
          return (
            <button
              className={FeedbackCss.btn}
              type="button"
              name={name}
              onClick={() => onLeaveFeedback(name)}
              key={name}
            >
              {name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
