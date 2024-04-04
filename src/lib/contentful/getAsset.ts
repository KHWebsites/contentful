import { gql } from '@apollo/client';
import { apolloFetcher } from '../apollo/apollo-fetcher';

enum EContentType {
    'image/png',
    'image/jpeg',
}

type TAsset = {
    title: string;
    description: string;
    size: number;
    fileName: string;
    contentType: EContentType;
    url: string;
    width: number;
    height: number;
};

type TAssetCollection = {
    asset: TAsset;
};

const GET_ASSET = gql`
    query ($id: String!) {
        asset(id: $id) {
            title
            description
            size
            fileName
            contentType
            url
            width
            height
        }
    }
`;

export const getAsset = ({ id }: { id: string }) => {
    return apolloFetcher<TAssetCollection>(GET_ASSET, { id });
};
