import { useMediaQuery } from '@mui/material';
import React from 'react';

type HolfuyResumeProps = {};

const HolfuyResume: React.FC<HolfuyResumeProps> = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 700px)');
    const mode = isTabletOrMobile ? 'vertical' : 'detailed';

    return (
        <iframe
            frameBorder="0"
            marginHeight={1}
            marginWidth={1}
            scrolling="no"
            src={`https://widget.holfuy.com/?station=1464&su=km/h&t=C&lang=fr&mode=${mode}`}
            style={
                isTabletOrMobile
                    ? { width: '200px', height: '500px' }
                    : { width: '580px', height: '250px' }
            }
        ></iframe>
    );
};

export default HolfuyResume;
