import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export type GenericMeterCardTitleProps = {
    children: React.ReactNode;
    hasLink?: boolean;
};

const GenericMeterCardTitle: React.FC<GenericMeterCardTitleProps> = ({
    children,
    hasLink,
}) => {
    return (
        <h2 className="generic-meter-card-title">
            {children}
            {hasLink && (
                <FontAwesomeIcon
                    className="generic-meter-card-title-icon"
                    icon={faArrowUpRightFromSquare}
                />
            )}
        </h2>
    );
};
export default GenericMeterCardTitle;
