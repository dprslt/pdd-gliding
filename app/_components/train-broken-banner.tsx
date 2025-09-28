import { faTrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TrainBrokenBanner : React.FC = () => {
    return (
        <div className="text-alert">
            <div className="warn">
                <FontAwesomeIcon icon={faTrain} />
            </div>
            <div className="text">
                <p>Suite à un <a href='https://www.lamontagne.fr/clermont-ferrand-63000/loisirs/le-panoramique-des-domes-ferme-pour-une-duree-indeterminee-apres-un-incident-technique_14754801/' style={{textDecoration: 'underline'}}>
                incident technique</a>, la cirulation du train est suspendue jusqu&apos;à nouvel ordre.</p>
            </div>
        </div>
    );
}
export default TrainBrokenBanner;