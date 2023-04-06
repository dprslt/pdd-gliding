/* eslint-disable @next/next/no-img-element */
import React from 'react';

type MeteoblueMultimodelProps = {};

const MeteoblueMultimodel: React.FC<MeteoblueMultimodelProps> = () => {
    return (
        <div className="meteo-blue-multimodel">
            <img
                src="https://my.meteoblue.com/visimage/meteogram_multiSimple?look=KILOMETER_PER_HOUR%2CCELSIUS%2CMILLIMETER&apikey=5838a18e295d&temperature=C&windspeed=kmh&precipitationamount=mm&winddirection=3char&city=Puy+de+D%C3%B4me&iso2=fr&lat=45.7725&lon=2.96408&asl=1464&tz=Europe%2FParis&dt=1&fcstlength=144&params=NMM4%2CNMM22%2CNEMS4%2CNEMS12%2CNEMS12_E%2CNEMSGLOBAL%2CNEMSGLOBAL_E%2CIFS04%2CUMGLOBAL10%2CUKMO2%2CICONEU%2CICON%2CICOND2%2CGFS05%2CGEM15%2CMFFR%2CMFEU%2CMFGLOBAL%2CHARMONIE&lang=fr&ts=1680454399&sig=9ad2b57786dc91f01661123305573c5d"
                alt="Multimodel - 6 days - Orcines"
            />
        </div>
    );
};

export default MeteoblueMultimodel;
