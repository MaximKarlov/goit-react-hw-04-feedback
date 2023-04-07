import { useState, useEffect } from 'react';
import { FeedbackOptions } from '../components/FeedbackOptions/FeedbackOptions';
import { Section } from '../components/Section/Section';
import { Notification } from '../components/Notification/Notification';
import { FeedStatistics } from '../components/Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positivePercente, setPositivePercente] = useState(0);

  const handleClick = e => {
    switch (e.target.name) {
      case 'Good':
        setGood(good + 1);
        break;
      case 'Neutral':
        setNeutral(neutral + 1);
        break;
      case 'Bad':
        setBad(bad + 1);
        break;
      default:
        console.error('12345677');
    }
  };

  useEffect(() => {
    setTotal(good + bad + neutral);
  }, [good, neutral, bad]);

  useEffect(() => {
    setPositivePercente(((good / total) * 100).toFixed(1));
  }, [good, total]);

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onClicker={handleClick} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <FeedStatistics good={good} neutral={neutral} bad={bad} total={total} percentage={positivePercente} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
