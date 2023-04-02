/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

type MesuresOPGCProps = {};

const MesuresOPGC: React.FC<MesuresOPGCProps> = () => {
    return (
        <img
            src={'https://wwwobs.univ-bpclermont.fr/observ/chimie/PDD.jpeg'}
            alt={'Balise OPGC'}
            style={{
                borderRadius: '1em',
            }}
            width={563}
            height={325}
        />
    );
};

export default MesuresOPGC;
