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
                    };
                }[];
            };
        }[];
    };
}>;

export const GET_NAVIGATION_MENU = gql`
    query ($locale: String!) {
        navigationMenuCollection(limit: 1, locale: $locale) {
            items {
                menuItemsCollection(limit: 5, locale: $locale) {
                    items {
                        title
                        featured
                        pagesCollection(limit: 10, locale: $locale) {
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

export const getNavigationMenu = async ({ locale }: { locale: string }) => {
    return apolloFetcher<TNavigationMenuCollection>(GET_NAVIGATION_MENU, {
        locale,
    });
};
