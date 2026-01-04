'use client';

import { Moment } from 'moment';
import { default as ReactMoment } from 'react-moment';
import React, { useMemo, useState } from 'react';
import {
    getAllTrainsOfADay,
    getNextTrainForADay,
    YearConfig,
} from '../../../services/Train/TrainSchedules';
import { useMoment } from '../../../hooks/useMoment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import trainStyle from '../train.module.scss';
import { mergeClasses } from 'utils/StyleHelper';

type TrainsOfTheDayProps = {
    config: YearConfig;
};

const TrainsOfTheDay: React.FC<TrainsOfTheDayProps> = ({ config }) => {
    const nowMoment = useMoment();

    const [showMissed, setShowMissed] = useState(false);
    const [nextDay, setNextDay] = useState(false);

    const momentToUse = useMemo(() => {
        if (nextDay) {
            return nowMoment.clone().add(1, 'day').startOf('day');
        }
        return nowMoment;
    }, [nowMoment, nextDay]);

    const { trains, nextTrain } = useMemo(() => {
        try {
            return {
                trains: getAllTrainsOfADay(momentToUse, config),
                nextTrain: getNextTrainForADay(momentToUse, config),
            };
        } catch (e) {
            console.error(e);
            return { trains: [], nextTrain: null };
        }
    }, [momentToUse, config]);

    return (
        <div className={trainStyle['train-of-day']}>
            <div className={trainStyle['train-header']}>
                <h2>Horaire des montées</h2>
                <button
                    className={
                        showMissed
                            ? trainStyle['missed-on']
                            : trainStyle['missed-off']
                    }
                    onClick={() => setShowMissed(!showMissed)}
                >
                    <FontAwesomeIcon icon={showMissed ? faEyeSlash : faEye} />{' '}
                    {showMissed
                        ? 'Masquer les trains ratés'
                        : 'Voir les trains ratés'}
                </button>
            </div>

            <div className={trainStyle['next-day-scedule-buttons']}>
                <button
                    className={mergeClasses(
                        nextDay ? '' : trainStyle['scedule-button--active'],
                        trainStyle['next-day-scedule-button'],
                    )}
                    onClick={() => setNextDay(false)}
                >
                    Aujourd&apos;hui
                </button>
                <button
                    className={mergeClasses(
                        nextDay ? trainStyle['scedule-button--active'] : '',
                        trainStyle['next-day-scedule-button'],
                    )}
                    onClick={() => setNextDay(true)}
                >
                    Demain
                </button>
            </div>

            {!showMissed &&
                nextTrain === null &&
                (nextDay ? (
                    <p>Pas de trains demain</p>
                ) : (
                    <p>Plus de trains pour aujourd&apos;hui.</p>
                ))}
            <ul>
                {trains.map((train) => {
                    const isMissed = nowMoment.isAfter(train);

                    if (isMissed && !showMissed) {
                        return null;
                    }
                    return (
                        <li
                            key={train.format('HH:mm')}
                            className={
                                isMissed
                                    ? trainStyle['missed']
                                    : trainStyle['active']
                            }
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
