import { gql } from '@apollo/client';
import { Document } from '@contentful/rich-text-types';
import { apolloFetcher } from '../apollo/apollo-fetcher';

type THeroComponentCollection = {
    heroComponent: {
        headline: string;
        bodyText: {
            json: Document;
            links?: {
                entries?: {
                  block?: any;
                  inline?: any;
                } | null;
                assets?: {
                  block?: any;
                } | null;
             } | null;
        };
        ctaText: string;
        ctAtargetPage: {
            pageName: string;
        };
        secondaryCtaText: string;
        secondaryCtaTargetPage: {
            pageName: string;
        };
        backgroundImage: {
            title: string;
            url: string;
            width: number;
            height: number;
        };
    };
};

const GET_HERO_COMPONENT = gql`
    query ($id: String!) {
        heroComponent(id: $id) {
            headline
            bodyText {
                json
                links {
                    entries {
                        block {
                            sys {
                                id
                            }
                        }
                        inline {
                            sys {
                                id
                            }
                        }
                    }
                    assets {
                        block {
                            sys {
                                id
                            }
                        }
                    }
                
                }
            }
            ctaText
            ctAtargetPage {
                pageName
            }
            secondaryCtaText
            secondaryCtaTargetPage {
                pageName
            }
            backgroundImage {
                title
                url
                width
                height
            }
        }
    }
`;

export const getHeroComponent = async ({ id }: { id: string }) => {
    return apolloFetcher<THeroComponentCollection>(GET_HERO_COMPONENT, { id });
};
