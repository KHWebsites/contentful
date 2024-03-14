import gql from 'graphql-tag';
import { getClient } from '@/app/lib/apollo/apollo-client';
import { ApolloQueryResult } from '@apollo/client';

const apolloClient = getClient();

export type landingPageCollection = Readonly<{
    landingPageCollection: {
        __typename: string;
        items: {
            pageName: string;
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

export const GET_LANDING_PAGE = gql`
    query ($internalName: String!) {
        landingPageCollection(where: { internalName: $internalName }) {
            items {
                pageName
                pageContentCollection(limit: 20) {
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

export const getLandingPage = async (): Promise<
    ApolloQueryResult<landingPageCollection>
> => {
    return await apolloClient.query<landingPageCollection>({
        query: GET_LANDING_PAGE,
        variables: { internalName: 'page - Homepage' },
    });
};
