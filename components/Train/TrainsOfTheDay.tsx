import moment, { Moment } from 'moment';
import { default as ReactMoment } from 'react-moment';
import React, { useEffect, useState } from 'react';
import { PanoSchedule2023 } from '../../services/Train/configs/2023';
import {
    getAllTrainsOfADay,
    getNextTrainForADay,
} from '../../services/Train/TrainSchedules';
import { useMoment } from '../../hooks/useMoment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

type TrainsOfTheDayProps = {};

const TrainsOfTheDay: React.FC<TrainsOfTheDayProps> = () => {
    const nowMoment = useMoment();

    const [trains, setAllTrains] = useState<Array<Moment>>([]);
    const [nextTrain, setNextTrain] = useState<Moment | null>(null);

    useEffect(() => {
        try {
            setAllTrains(getAllTrainsOfADay(nowMoment, PanoSchedule2023));
            setNextTrain(getNextTrainForADay(nowMoment, PanoSchedule2023));
        } catch (e) {
            console.error(e);
        }
    }, [nowMoment]);

    const [showMissed, setShowMissed] = useState(nextTrain === null);

    return (
        <div className="train-of-day">
            <h2>
                Trains de la journée{' '}
                <button
                    className={showMissed ? 'missed-on' : 'missed-off'}
                    onClick={() => setShowMissed(!showMissed)}
                >
                    <FontAwesomeIcon icon={showMissed ? faEyeSlash : faEye} />
                </button>
            </h2>
            <ul>
                {trains.map((train) => {
                    const isMissed = nowMoment.isAfter(train);

                    if (isMissed && !showMissed) {
                        return null;
                    }
                    return (
                        <li
                            key={train.format('HH:mm')}
                            className={isMissed ? 'missed' : 'active'}
                        >
                            <ReactMoment date={train} format={'HH[h]mm'} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TrainsOfTheDay;
