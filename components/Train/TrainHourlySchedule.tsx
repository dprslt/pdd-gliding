/* eslint-disable @next/next/no-img-element */
import React from 'react';

type TrainHourlyScheduleProps = {};

const TrainHourlySchedule: React.FC<TrainHourlyScheduleProps> = () => {
    return (
        <div className="trainHourlySchedule">
            <h2>Planning horaire Officiel</h2>
            <img
                src="https://www.panoramiquedesdomes.fr/uploads/images/images/Horaires%202022.jpg"
                alt="Horaires train heure par heure"
                width={505}
                height={458}
            />
        </div>
    );
};

export default TrainHourlySchedule;
