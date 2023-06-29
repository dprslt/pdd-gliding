/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MeteoSubPage from '../MeteoSubPage';

type MeteoBluePageProps = {};

const MeteoBluePage: React.FC<MeteoBluePageProps> = () => {
    return (
        <MeteoSubPage>
            <img
                src="https://my.meteoblue.com/visimage/meteogram_web?look=KILOMETER_PER_HOUR%2CCELSIUS%2CMILLIMETER%2Cdarkmode&apikey=5838a18e295d&temperature=C&windspeed=kmh&precipitationamount=mm&winddirection=3char&city=Orcines&iso2=fr&lat=45.7825&lon=3.01234&asl=822&tz=Europe%2FParis&lang=fr&sig=cfa7e7c1a4db266a64615ec418538ee8"
                srcSet="https://my.meteoblue.com/visimage/meteogram_web_hd?look=KILOMETER_PER_HOUR%2CCELSIUS%2CMILLIMETER%2Cdarkmode&apikey=5838a18e295d&temperature=C&windspeed=kmh&precipitationamount=mm&winddirection=3char&city=Orcines&iso2=fr&lat=45.7825&lon=3.01234&asl=822&tz=Europe%2FParis&lang=fr&sig=7dca94e85de9baea6ddaf54df282ec3b 1.4x"
                alt="Meteogram - 5 days - Orcines"
            />
        </MeteoSubPage>
    );
};

export default MeteoBluePage;
