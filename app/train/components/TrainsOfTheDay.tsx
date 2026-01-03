import React from 'react';
import { PanoSchedule2026 } from '../../../services/Train/configs/2026';
import { TrainCard } from './TrainCard';
import { getCurrentDate } from '../../../utils/dateUtils';

export const TrainsOfTheDay: React.FC = () => {
  const today = getCurrentDate();
  const todaysTrains = PanoSchedule2026.filter(train => train.date === today);

  if (todaysTrains.length === 0) {
    return (
      <div className="no-trains">
        <p>No trains scheduled for today</p>
      </div>
    );
  }

  return (
    <div className="trains-of-the-day">
      <h2>Today's Trains</h2>
      <div className="train-list">
        {todaysTrains.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};
