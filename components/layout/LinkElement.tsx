import { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
import Image from 'next/image';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type LinkElementProps = {
    href: string;
    children: ReactNode;
    favicon: StaticImageData;
};

const LinkElement: React.FC<LinkElementProps> = ({
    href,
    children,
    favicon,
}) => {
    return (
        <a href={href} target="_blank" rel="noreferrer">
            <div className="link-element">
                <Image
                    src={favicon}
                    alt={'link Icon'}
                    style={{
                        borderRadius: '1em',
                    }}
                    height={'50'}
                    width={'50'}
                />
                <h3>{children}</h3>
                <FontAwesomeIcon icon={faExternalLink} />
            </div>
        </a>
    );
};

export default LinkElement;
