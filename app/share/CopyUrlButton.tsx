'use client';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

const CopyUrlButton: React.FC = () => {
    return (
        <button
            onClick={() => {
                navigator.clipboard.writeText('https://pdd.dprslt.fr');
            }}
            className="raw-button url-container"
        >
            <h2>https://pdd.dprslt.fr</h2>
            <div className="copy-url-button">
                Copier
                <FontAwesomeIcon icon={faCopy} />
            </div>
        </button>
    );
};

export default CopyUrlButton;
