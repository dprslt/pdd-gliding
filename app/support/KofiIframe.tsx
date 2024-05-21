import React from 'react';

type KofiIframeProps = {};

const KofiIframe: React.FC<KofiIframeProps> = () => {
    return (
        <iframe
            id="kofiframe"
            src="https://ko-fi.com/dprslt/?hidefeed=true&widget=true&embed=true&preview=true"
            style={{
                border: 'none',
                width: '100%',
                padding: '4px',
                // background: '#f9f9f9',
            }}
            height="600"
            title="dprslt"
        ></iframe>
    );
};

export default KofiIframe;
