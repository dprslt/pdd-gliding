'use client';

import { NOTAMstructure } from 'services/spaces/sofiaNotam';
import './notamCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDoubleDown,
    faArrowRight,
    faArrowsDownToLine,
    faArrowsUpToLine,
    faClock,
    faFlaskVial,
    faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { mergeClasses } from 'utils/StyleHelper';
import { Button } from '@mui/material';
import { DateTime } from 'luxon';
import { translateUTCRangetoLocalInMessage } from 'services/spaces/localTime';

type NotamCardProps = {
    notam: NOTAMstructure;
};

export default function NotamCard({ notam }: NotamCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const [showLocaleTime, setShowLocaleTime] = useState(false);

    return (
        <div
            className={mergeClasses(
                'notam-card',
                isOpen ? 'notam-card__open' : null
            )}
        >
            <div className="notam-card-container-heading">
                <div className="notam-card-content">
                    <div className="notam-card-infos">
                        <div className="notam-card-validity">
                            {DateTime.fromISO(notam.startValidity)
                                .setZone('Europe/Paris')
                                .toFormat('dd/MM/yy HH:mm')}
                            <FontAwesomeIcon icon={faArrowRight} />
                            {DateTime.fromISO(notam.endValidity)
                                .setZone('Europe/Paris')
                                .toFormat('dd/MM/yy HH:mm')}
                        </div>

                        <div className="notam-card-heigths">
                            <span className="notam-card-heights--floor">
                                <FontAwesomeIcon icon={faArrowsDownToLine} />
                                {notam.itemF}
                            </span>
                            <span className="notam-card-heights--ceiling">
                                <FontAwesomeIcon icon={faArrowsUpToLine} />
                                {notam.itemG}
                            </span>
                        </div>
                    </div>
                    {notam.itemD &&
                        (showLocaleTime ? (
                            <div className="notam-card-fieldD notam-card-fieldD--local">
                                <span
                                    className="fieldD-UTC-badge"
                                    onClick={() => setShowLocaleTime(false)}
                                >
                                    <FontAwesomeIcon icon={faFlaskVial} />
                                    Activation Local
                                </span>
                                <span>
                                    {translateUTCRangetoLocalInMessage(
                                        notam.itemD,
                                        DateTime.now()
                                    )}
                                </span>
                            </div>
                        ) : (
                            <div className="notam-card-fieldD">
                                <button
                                    className="fieldD-UTC-badge"
                                    onClick={() => setShowLocaleTime(true)}
                                >
                                    <FontAwesomeIcon icon={faClock} />
                                    Activation UTC
                                </button>
                                <span>{notam.itemD}</span>
                            </div>
                        ))}

                    <div className="notam-card-fieldE">
                        <pre>{notam.multiLanguage.itemE}</pre>
                    </div>
                </div>
                <div className="notam-card-action">
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </Button>
                </div>
            </div>

            <div className={mergeClasses('notam-card-container-unroll')}>
                <pre>{JSON.stringify(notam, null, 2)}</pre>
            </div>
        </div>
    );
}
