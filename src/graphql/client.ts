import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloCache = new InMemoryCache();

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
