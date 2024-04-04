import gql from 'graphql-tag';
import { apolloFetcher } from '../apollo/apollo-fetcher';

export type TLandingPageCollection = Readonly<{
    landingPageCollection: {
        __typename: string;
        items: {
            pageName: string;
            slug: string;
            pageContentCollection: {
                items: {
                    __typename: string;
                    sys: {
                        id: string;
                    };
                }[];
            };
            seoMetadata: {
                seoTitle: string;
                description: string;
                image: {
                    url: string;
                };
                noIndex: boolean;
                noFollow: boolean;
            };
        }[];
    };
}>;

export type TLandingPage = Readonly<{
    landingPage: {
        pageName: string;
        slug: string;
        pageContentCollection: {
            items: {
                __typename: string;
                sys: {
                    id: string;
                };
            }[];
        };
        seoMetadata: {
            seoTitle: string;
            description: string;
            image: {
                url: string;
            };
            noIndex: boolean;
            noFollow: boolean;
        };
    };
}>;

export const GET_LANDING_PAGE_BY_INTERNALNAME = gql`
    query ($internalName: String!, $locale: String!) {
        landingPageCollection(
            where: { internalName: $internalName }
            locale: $locale
        ) {
            items {
                pageName
                slug
                pageContentCollection(limit: 20, locale: $locale) {
                    items {
                        __typename
                        sys {
                            id
                        }
                    }
                }
                seoMetadata {
                    seoTitle
                    description
                    image {
                        url
                    }
                    noIndex
                    noFollow
                }
            }
        }
    }
`;

export const GET_LANDING_PAGE_BY_ID = gql`
    query ($id: String!, $locale: String!) {
        landingPage(id: $id, locale: $locale) {
            pageName
            slug
            pageContentCollection(limit: 20, locale: $locale) {
                items {
                    __typename
                    sys {
                        id
                    }
                }
            }
            seoMetadata {
                seoTitle
                description
                image {
                    url
                }
                noIndex
                noFollow
            }
        }
    }
`;

export const getLandingPageByInternalName = async ({
    internalName,
    locale,
}: {
    internalName: string;
    locale: string;
}) => {
    return apolloFetcher<TLandingPageCollection>(
        GET_LANDING_PAGE_BY_INTERNALNAME,
        { internalName, locale }
    );
};

export const getLandingPageById = async ({
    id,
    locale,
}: {
    id: string;
    locale: string;
}) => {
    return apolloFetcher<TLandingPage>(GET_LANDING_PAGE_BY_ID, { id, locale });
};
