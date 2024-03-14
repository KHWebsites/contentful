import gql from 'graphql-tag';
import { apolloFetcher } from '../apollo/apollo-fetcher';

export type TNavigationMenuCollection = Readonly<{
    navigationMenuCollection: {
        items: {
            menuItemsCollection: {
                items: {
                    title: string;
                    featured: boolean;
                    pagesCollection: {
                        items: {
                            pageName: string;
                            slug: string;
                        }[];
                    }
                }[]
            }
        }[]
    }
}>;

export const GET_NAVIGATION_MENU = gql`
    query {
        navigationMenuCollection(limit: 1) {
            items {
                menuItemsCollection(limit: 5) {
                    items {
                        title
                        featured
                        pagesCollection(limit: 10) {
                            items {
                                pageName
                                slug
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const getNavigationMenu = async () => {
    return apolloFetcher<TNavigationMenuCollection>(GET_NAVIGATION_MENU);
}