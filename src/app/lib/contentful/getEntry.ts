import { gql } from '@apollo/client';
import { apolloFetcher } from '../apollo/apollo-fetcher';

type _TEntry = {
    __typename: string;
    sys: {
        id: string;
    };
};

type _TEntryCollection = {
    entryCollection: {
        items: _TEntry[];
    };
};

const GET_ENTRY = gql`
query ($id: String!) {
    entryCollection(where: {sys: {id: $id}}) {
      items {
        sys {
          id
        }
      }
    }
  }
`;

export const getEntry = async ({id}: {id: string}) => {
    return apolloFetcher<_TEntryCollection>(GET_ENTRY, { id });
}
