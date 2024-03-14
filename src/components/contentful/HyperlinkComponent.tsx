import { getAsset } from "@/app/lib/contentful/getAsset";
import { getEntry } from "@/app/lib/contentful/getEntry";
import { getLandingPageById } from "@/app/lib/contentful/getLandingpage";
import Link from "next/link";
import { ReactNode } from "react";

type _Props = {
    id: string;
    nodeType: string;
    children?: ReactNode | undefined;
}

export const HyperlinkComponent = async ({id, nodeType, children}: _Props) => {
    switch (nodeType) {
        case 'entry-hyperlink':
            const {data: entryData, loading: entryLoading} = await getEntry({id});

            if (entryLoading) {
                return null;
            }

            // ! Assuming that an entry-hyperlink will always be a page
            const { data } = await getLandingPageById({id: entryData.entryCollection.items[0].sys.id});

            return <Link className="underline" href={data.landingPage.slug}>{children ? children : data.landingPage.pageName}</Link>
        case 'asset-hyperlink':
            const {data: assetData, loading: assetLoading} = await getAsset({id});

            if (assetLoading) {
                return null;    
            }

            return (
                <Link className="underline" target="_blank" href={assetData.asset.url}>{children ? children : assetData.asset.title}</Link>
            );
        default:
            return null;
    }
}