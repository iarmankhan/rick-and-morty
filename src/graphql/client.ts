import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['filter'],
          merge(existing = [], incoming) {
            if (!existing.length) return incoming;
          },
        },
      },
    },
  },
});

export interface CreateApolloClientConfig {
  urlBase: string;
}

export function createApolloClient(cfg: CreateApolloClientConfig) {
  const { urlBase } = cfg;

  return new ApolloClient({
    uri: `${urlBase}/graphql`,
    cache: apolloCache,
  });
}
