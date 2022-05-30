/* eslint-disable @next/next/no-img-element */
import React from 'react';

type TrainHourlyScheduleProps = {};

const TrainHourlySchedule: React.FC<TrainHourlyScheduleProps> = () => {
    return (
        <img
            src="https://www.panoramiquedesdomes.fr/uploads/images/images/Horaires%202022.jpg"
            alt="Horaires train heure par heure"
            width={505}
            height={458}
        />
    );
};

export default TrainHourlySchedule;
