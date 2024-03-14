import type { Metadata } from 'next';
import { getLandingPageByInternalName } from '@/app/lib/contentful/getLandingpage';
import { PageContainer } from '@/components/PageContainer';
import { PageContent } from '@/components/contentful/PageContent';

const internalPageName = 'page - Homepage';

export default async function Home() {
    const { data } = await getLandingPageByInternalName({
        internalName: internalPageName,
    });
    const pageContent =
        data.landingPageCollection!.items[0].pageContentCollection.items;

    return (
        <PageContainer>
            <PageContent pageContent={pageContent} />
        </PageContainer>
    );
}

export async function generateMetadata(): Promise<Metadata> {
    const { data } = await getLandingPageByInternalName({
        internalName: internalPageName,
    });
    const seoMetadata = data.landingPageCollection.items[0].seoMetadata;

    return {
        title: seoMetadata.seoTitle,
        description: seoMetadata.description,
        openGraph: {
            title: seoMetadata.seoTitle,
            description: seoMetadata.description,
            images: [
                {
                    url: seoMetadata.image.url,
                    width: 400,
                    height: 400,
                    alt: seoMetadata.seoTitle,
                },
            ],
        },
    };
}
