import React from 'react';
import Popup from '../Popup';
import LinkElement from 'components/layout/linkElement/LinkElement';

import Image from 'next/image';

import CADProgImage from './cad_prog.png';
import CADLogo from './logo.png';

export type CadPopupProps = {
    onClose: () => void;
};

const CadPopup: React.FC<CadPopupProps> = ({ onClose }) => {
    return (
        <Popup
            title="Soirée de lancement de la CAD"
            open={true}
            onClose={onClose}
        >
            <p>
                Découvrez la 1ère soirée de lancement de la saison des vols de
                distance et CAD.
            </p>
            <p>
                Le but est déjà de se retrouver en ces moments
                d&apos;hibernation pour échanger sur ces sujets et de se
                connaître aussi car on est de plus en plus nombreux à voyager au
                dessus et au delà de nos volcans.
                <br />
                <br />À samedi.
            </p>
            <LinkElement
                href={'https://forms.gle/oZBBmvg9ocw2j8vs6'}
                favicon={CADLogo}
            >
                Inscrivez vous !
            </LinkElement>

            <h2>Programme</h2>

            <Image
                src={CADProgImage}
                alt="Programme"
                style={{
                    maxWidth: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                }}
            />
        </Popup>
    );
};
export default CadPopup;
