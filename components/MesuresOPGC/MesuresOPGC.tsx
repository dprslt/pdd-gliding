/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

type MesuresOPGCProps = {};

const MesuresOPGC: React.FC<MesuresOPGCProps> = () => {
    return (
        <div>
            <img
                src={'https://wwwobs.univ-bpclermont.fr/observ/chimie/PDD.jpeg'}
                alt={'Balise OPGC'}
                width={563}
                height={325}
            />
        </div>
    );
};

export default MesuresOPGC;
