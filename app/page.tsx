// import { redirect } from 'next/navigation';
// import React from 'react';

import BalisesPage, { metadata as balisesMeta } from './balises/page';

export const metadata = {
    ...balisesMeta,
};

export const revalidate = 60; 
const MainPage = () => {
    return (
        <BalisesPage />
    );
};
export default MainPage;
