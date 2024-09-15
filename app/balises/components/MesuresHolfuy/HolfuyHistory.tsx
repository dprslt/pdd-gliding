'use client';
import React from 'react';

type HolfuyHistoryProps = {};

const HolfuyHistory: React.FC<HolfuyHistoryProps> = () => {
    return (
        <iframe
            frameBorder="0"
            marginHeight={1}
            marginWidth={1}
            scrolling="no"
            src="https://widget.holfuy.com/?station=1464&su=km/h&t=C&lang=fr&mode=average&avgrows=15"
            style={{ width: '580px', height: '170px' }}
        ></iframe>
    );
};

export default HolfuyHistory;
