import React from 'react';

type HolfuyResumeProps = {};

const HolfuyResume: React.FC<HolfuyResumeProps> = () => {
    return (
        <iframe
            frameBorder="0"
            marginHeight={1}
            marginWidth={1}
            scrolling="no"
            src="https://widget.holfuy.com/?station=1464&su=km/h&t=C&lang=fr&mode=detailed"
            style={{ width: '580px', height: '250px' }}
        ></iframe>
    );
};

export default HolfuyResume;
