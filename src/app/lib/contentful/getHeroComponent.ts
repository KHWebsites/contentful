import { ApolloQueryResult, gql } from '@apollo/client';
import { getClient } from '@/app/lib/apollo/apollo-client';
import { Document } from '@contentful/rich-text-types';

const apolloClient = getClient();

type heroComponentCollection = {
    heroComponent: {
        headline: string;
        bodyText: {
            json: Document;
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

export const getHeroComponent = async ({
    id,
}: {
    id: string;
}): Promise<ApolloQueryResult<heroComponentCollection>> => {
    return await apolloClient.query<heroComponentCollection>({
        query: GET_HERO_COMPONENT,
        variables: { id },
    });
};
