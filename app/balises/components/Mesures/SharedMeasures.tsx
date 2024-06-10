import React from 'react';
import GenericMeterCard from '../GenericMeters/GenericMeterCard';

type SharedMeasureProps = {};

const SharedMeasure: React.FC<SharedMeasureProps> = () => {
    return (
        <div>
            <div className="shared-measure-cards">
                <GenericMeterCard />
                <GenericMeterCard />
            </div>

            <SharedMeasureGraph />
        </div>
    );
};

export default SharedMeasure;
