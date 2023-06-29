import { redirect } from 'next/navigation';
import React from 'react';

const MeteoRedirectPage: React.FC = () => {
    redirect('/meteo/meteoparapente');
    return null;
};

export default MeteoRedirectPage;
