'use server';

import React from 'react';
import {
    fetchOPGCValues,
    fetchOPGCmaxWind,
    fetchWindHistoryFromGafana,
} from '../../../../services/opgc/meter-opgc';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDroplet,
    faLocationArrow,
    faMapLocation,
    faNavicon,
    faScaleUnbalanced,
    faTemperatureThreeQuarters,
    faWind,
} from '@fortawesome/free-solid-svg-icons';
import { DateTime } from 'luxon';
import RawMeterGraph from './RawMeterGraph';
import OPGCMeterFromFiles from './OPGCMeterFromFiles';

async function buildOPGCData() {
    const [opgcvalues, opgcValuesMaxSpeed] = await Promise.all([
        fetchOPGCValues(),
        fetchOPGCmaxWind(),
    ]);

    const opgcdata = {
        ...opgcvalues,
        maxWindSpeed: opgcValuesMaxSpeed.windSpeedMax,
    };

    return opgcdata;
}

export default async function RawMeterOPGC() {
    const [grafanadata] = await Promise.all([fetchWindHistoryFromGafana()]);

    return (
        <div>
            <OPGCMeterFromFiles />
            <RawMeterGraph
                windData={grafanadata.wind}
                orientationData={grafanadata.orientation}
            />
            {/* <RawMeterGraph data={[grafanadata.orientation as any]} /> */}
        </div>
    );
}
