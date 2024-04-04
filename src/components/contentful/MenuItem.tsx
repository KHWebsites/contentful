'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export type TMenuItem = {
    title: string;
    featured: boolean;
    pagesCollection: {
        items: {
            pageName: string;
            slug: string;
        }[];
    };
};

export const MenuItem = ({ menuItem }: { menuItem: TMenuItem }) => {
    const pathName = usePathname();
    const locale = useLocale();

    // TODO: Look at this logic as it doesnt really work with the current locale setup
    const isActive =
        `${menuItem.pagesCollection.items[0].slug}${locale}` === pathName;

    return (
        <li
            key={menuItem.title}
            className={`${menuItem.featured ? 'font-bold' : ''} ${isActive ? 'underline' : ''}`}
        >
            <Link href={menuItem.pagesCollection.items[0].slug}>
                {menuItem.title}
            </Link>
        </li>
    );
};
