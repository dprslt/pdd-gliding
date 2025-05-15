import React from 'react';
import Popup from '../Popup';
import LinkElement from 'components/layout/linkElement/LinkElement';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneCircleCheck } from '@fortawesome/free-solid-svg-icons';

import logoHehol from './logo-hehol.png';
import banner from './glider-and-planes.jpeg';

export type CadPopupProps = {
    onClose: () => void;
};

const HeholJune25Popup: React.FC<CadPopupProps> = ({ onClose }) => {
    return (
        <Popup
            title="Exercices militaires en approche."
            open={true}
            onClose={onClose}
        >
            <Image
                src={banner}
                alt="Banner"
                style={{
                    maxWidth: '100%',
                    width: 'auto',
                    maxHeight: '200px',
                    height: 'fit-content',
                    display: 'block',
                    margin: '0 auto',
                    borderRadius: '0.5em',
                }}
            />
            <p>
                Ce printemps s&apos;annonce chargé en exercices qui vont
                entrainer l&apos;activation de la zone centre et de zones
                temporaires mises en place par des SUPAIP.
            </p>
            <p>
                Ces exercices vont limiter les possibilités de vol en partant du
                Puy de Dôme. Soyez donc vigilant quand à l&apos;activation de
                ces zones
            </p>
            <p>
                Vous pourrez retrouvez plus d&apos;informations sur la
                réglementation locale dans la partie{' '}
                <FontAwesomeIcon icon={faPlaneCircleCheck} /> de
                l&apos;application.
            </p>
            <p>
                J&apos;ai également lancé cette année une nouvelle application
                qui vous centralise toute l&apos;information sur les espaces
                aériens dans toute la france.
            </p>
            <LinkElement href="https://hehol.fr" favicon={logoHehol}>
                HEHOL
            </LinkElement>

            <p>
                Si HEHOL vous plait ou que vous souhaitez juste soutenir ce
                site, n&apos;hésitez pas à vous{' '}
                <a
                    href="https://hehol.fr/subscription"
                    target="_blank"
                    rel="noreferrer"
                >
                    abonner à l&apos;application.
                </a>
            </p>
        </Popup>
    );
};
export default HeholJune25Popup;
