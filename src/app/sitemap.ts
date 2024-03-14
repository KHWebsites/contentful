import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const defaultPages = [
        {
            url: 'https://themobilecompany.com',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ] as MetadataRoute.Sitemap;

    // Get dynamic pages
    // Get dynamic posts

    const sitemap = [
        ...defaultPages,
        // ...dynamicPages,
        // ...dynamicPosts
    ];

    return sitemap;
}
