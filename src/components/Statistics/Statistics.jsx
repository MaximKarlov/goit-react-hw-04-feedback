import PropTypes from 'prop-types';
import FeedbackCss from '../FeedbackOptions/Feedback.module.css';

export const FeedStatistics = ({ good, bad, neutral, total, percentage }) => {
  return (
    <div className={FeedbackCss.statistics}>
      <ul className={FeedbackCss.statistics_items}>
        <li className={FeedbackCss.statistics_item}>
          <span>Good: </span>
          {good}
        </li>
        <li className={FeedbackCss.statistics_item}>
          <span>Neutral: </span>
          {neutral}
        </li>
        <li className={FeedbackCss.statistics_item}>
          <span>Bad: </span>
          {bad}
        </li>
        <li className={FeedbackCss.statistics_item}>
          <span>Total: </span>
          {total}
        </li>
        <li className={FeedbackCss.statistics_item}>
          <span>
            Positive feedback:
            {percentage}%
          </span>
        </li>
      </ul>
    </div>
  );
};

FeedStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
};
