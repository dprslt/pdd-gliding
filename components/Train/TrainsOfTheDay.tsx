import moment, { Moment } from 'moment';
import { default as ReactMoment } from 'react-moment';
import React, { useEffect, useState } from 'react';
import { PanoSchedule2023 } from '../../services/Train/configs/2023';
import {
    getAllTrainsOfADay,
    getNextTrainForADay,
} from '../../services/Train/TrainSchedules';
import { useMoment } from '../../hooks/useMoment';

type TrainsOfTheDayProps = {};

const TrainsOfTheDay: React.FC<TrainsOfTheDayProps> = () => {
    const nowMoment = useMoment();

    const [trains, setNextTrain] = useState<Array<Moment>>([]);

    useEffect(() => {
        try {
            setNextTrain(getAllTrainsOfADay(nowMoment, PanoSchedule2023));
        } catch (e) {
            console.error(e);
        }
    }, [nowMoment]);
    return (
        <div className="train-of-day">
            <h2>Trains de la journée</h2>
            <ul>
                {trains.map((train) => (
                    <li
                        key={train.format('HH:mm')}
                        className={
                            nowMoment.isAfter(train) ? 'missed' : 'active'
                        }
                    >
                        <ReactMoment date={train} format={'HH[h]mm'} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainsOfTheDay;
