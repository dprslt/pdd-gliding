import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type ActiveLinkProps = {
    href: string;
    children: ReactNode;
    enabledClass?: string;
    emptyPathMeanActive?: boolean;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
    href,
    children,
    enabledClass = 'active',
    emptyPathMeanActive = false,
}) => {
    const pathname = usePathname();
    const isActive =
        pathname &&
        (pathname?.startsWith(href) ||
            (emptyPathMeanActive && pathname?.length <= 1));
    return (
        <Link href={href} className={isActive ? enabledClass : ''}>
            {children}
        </Link>
    );
};

export default ActiveLink;
