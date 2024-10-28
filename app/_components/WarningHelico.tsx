import { faHelicopter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateTime } from 'luxon';
import React from 'react';

const WarningHelico = () => {
    if (
        DateTime.now() >
        DateTime.fromISO('2024-10-29').setZone('Europe/Paris').endOf('day')
    ) {
        return null;
    }

    return (
        <div>
            <div className="text-alert">
                <div className="warn">
                    <FontAwesomeIcon icon={faHelicopter} />
                </div>
                <div className="text">
                    <p>
                        Le commandant de la station militaire nous a confirmé la
                        présence d&apos;un hélicoptère sur le site du Puy de
                        Dôme Mardi 29 Octobre. Celui-ci se posera sur
                        l&apos;aire située face à la salle pique-nique. Il
                        effectuera deux manœuvres.
                    </p>

                    <p>
                        Le CDVL demande donc à tous les pilotes de ne pas voler
                        pendant toute la période de présence de cet hélicoptère
                        afin de garder de bonne relation avec les services de
                        l&apos;armée. Il en va de la pérennité de notre activité
                        sur ce site.
                    </p>

                    <p>Les horaires de vol sont les suivants :</p>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Atterissages 14h20, décollage 14h30</li>
                        <li>Atterissage 16h20, décollage 16h30</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default WarningHelico;
