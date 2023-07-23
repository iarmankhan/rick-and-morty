import { PropsWithChildren, useMemo } from 'react';
import { ApolloProvider as BaseApolloProvider } from '@apollo/client';
import { createApolloClient } from '../graphql/client.ts';

export interface ApolloProviderProps extends PropsWithChildren {
  urlBase: string;
}

export function ApolloProvider(props: ApolloProviderProps) {
  const client = useMemo(() => {
    return createApolloClient({
      urlBase: props.urlBase,
    });
  }, [props.urlBase]);

  return <BaseApolloProvider client={client}>{props.children}</BaseApolloProvider>;
}
