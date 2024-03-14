import {
    ApolloQueryResult,
    DocumentNode,
    OperationVariables,
    QueryOptions,
} from '@apollo/client';
import { getClient } from '@/app/lib/apollo/apollo-client';

const apolloClient = getClient();

type _TApolloFetcher = <T>(
    query: DocumentNode,
    variables?: OperationVariables | undefined
) => Promise<ApolloQueryResult<T>>;

export const apolloFetcher: _TApolloFetcher = async (query, variables) => {
    const options: QueryOptions = {
        query,
        variables,
    };
    return await apolloClient.query(options);
};
