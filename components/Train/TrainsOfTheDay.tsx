import moment, { Moment } from 'moment';
import { default as ReactMoment } from 'react-moment';
import React, { useEffect, useState } from 'react';
import { PanoSchedule2022 } from '../../services/Train/configs/2022';
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
        setNextTrain(getAllTrainsOfADay(nowMoment, PanoSchedule2022));
    }, [nowMoment]);
    return (
        <div>
            <h3>Trains de la journée</h3>
            <ul>
                {trains.map((train) => (
                    <li key={train.format('HH:mm')}>
                        <ReactMoment date={train} format={'HH[h]mm'} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrainsOfTheDay;
