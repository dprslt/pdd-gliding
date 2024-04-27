import React from 'react';

type MetaJDVProps = {};

const MetaJDV: React.FC<MetaJDVProps> = () => {
    return (
        <div className="jdv-container">
            <iframe
                id="ifram-meta-jdv"
                src="https://journaldevol.com/planning/page/77edff8f-393f-48a9-bce8-cbe647ee4cc3?iframe=true"
                title="Vue des balises à proximité depuis JDV"
            ></iframe>
        </div>
    );
};

export default MetaJDV;
