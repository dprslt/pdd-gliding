'use client';

import React from 'react';
import { useMoment } from '../../../hooks/useMoment';
import { PanoSchedule2026 } from '../../../services/Train/configs';
import {
    isDateCoveredByYearConfig,
    YearConfig,
} from '../../../services/Train/TrainSchedules';
import TrainNextOneToday from './TrainNextOneToday';
import TrainsOfTheDay from './TrainsOfTheDay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const TrainScheduleManager: React.FC = () => {
    const nowMoment = useMoment();
    const config: YearConfig = PanoSchedule2026;

    const isCovered = isDateCoveredByYearConfig(nowMoment, config);

    if (!isCovered) {
        return (
            <div>
                <div className="text-alert">
                    <div className="warn">
                        <FontAwesomeIcon icon={faExclamationTriangle} />
                    </div>
                    <div className="text">
                        <p>
                            Les horaires pour l&apos;année{' '}
                            {nowMoment.format('YYYY')} ne sont pas encore
                            disponibles.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <TrainNextOneToday config={config} />
            <TrainsOfTheDay config={config} />
        </>
    );
};

export default TrainScheduleManager;
