import {
    ApolloQueryResult,
    DocumentNode,
    OperationVariables,
    QueryOptions,
} from '@apollo/client';
import { getClient } from '../../lib/apollo/apollo-client';

const apolloClient = getClient();

type _TApolloFetcher = <T>(
    // eslint-disable-next-line no-unused-vars
    query: DocumentNode,
    // eslint-disable-next-line no-unused-vars
    variables?: OperationVariables | undefined
) => Promise<ApolloQueryResult<T>>;

export const apolloFetcher: _TApolloFetcher = async (query, variables) => {
    const options: QueryOptions = {
        query,
        variables,
    };
    return await apolloClient.query(options);
};
