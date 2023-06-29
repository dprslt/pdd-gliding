import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type ActiveLinkProps = {
    href: string;
    children: ReactNode;
    enabledClass?: string;
};

const ActiveLink: React.FC<ActiveLinkProps> = ({
    href,
    children,
    enabledClass = 'active',
}) => {
    const pathname = usePathname();
    const isActive = pathname?.startsWith(href);
    return (
        <Link href={href} className={isActive ? enabledClass : ''}>
            {children}
        </Link>
    );
};

export default ActiveLink;
