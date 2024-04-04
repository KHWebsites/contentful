import { useLocale } from 'next-intl';
import { getAsset } from '../../lib/contentful/getAsset';
import { getEntry } from '../../lib/contentful/getEntry';
import { getLandingPageById } from '../../lib/contentful/getLandingpage';
import Link from 'next/link';
import { ReactNode } from 'react';

type _Props = {
    id: string;
    nodeType: string;
    children?: ReactNode | undefined;
};

export const HyperlinkComponent = async ({
    id,
    nodeType,
    children,
}: _Props) => {
    const locale = useLocale();
    switch (nodeType) {
        case 'entry-hyperlink':
            // eslint-disable-next-line no-case-declarations
            const { data: entryData, loading: entryLoading } = await getEntry({
                id,
            });

            if (entryLoading) {
                return null;
            }

            // ! Assuming that an entry-hyperlink will always be a page
            // eslint-disable-next-line no-case-declarations
            const { data } = await getLandingPageById({
                id: entryData.entryCollection.items[0].sys.id,
                locale,
            });

            return (
                <Link className='underline' href={data.landingPage.slug}>
                    {children ? children : data.landingPage.pageName}
                </Link>
            );
        case 'asset-hyperlink':
            // eslint-disable-next-line no-case-declarations
            const { data: assetData, loading: assetLoading } = await getAsset({
                id,
            });

            if (assetLoading) {
                return null;
            }

            return (
                <Link
                    className='underline'
                    target='_blank'
                    href={assetData.asset.url}
                >
                    {children ? children : assetData.asset.title}
                </Link>
            );
        default:
            return null;
    }
};
