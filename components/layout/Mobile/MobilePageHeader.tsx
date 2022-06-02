import React from 'react';
import Image from 'next/image';

import icon from '../../../public/icone-pdd.png';

type MobilePageHeaderProps = {
    title: string;
};

const MobilePageHeader: React.FC<MobilePageHeaderProps> = ({ title }) => {
    return (
        <div className="mobilePage-header">
            {/* <Image
                src={icon}
                height={40}
                width={40}
                alt="logo"
                className="header-icon"
            /> */}
            <h1 className="mobilepage-title">{title}</h1>
        </div>
    );
};

export default MobilePageHeader;
