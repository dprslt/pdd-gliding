import React from 'react';
import MeteoSubPage from '../MeteoSubPage';

const WindyPage: React.FC = () => {
    return (
        <MeteoSubPage>
            <iframe
                width="50%"
                height="700"
                src="https://embed.windy.com/embed2.html?lat=45.754&lon=2.960&detailLat=45.793&detailLon=2.960&width=650&height=700&zoom=11&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricWind=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"
                frameBorder="0"
            ></iframe>
        </MeteoSubPage>
    );
};

export default WindyPage;
