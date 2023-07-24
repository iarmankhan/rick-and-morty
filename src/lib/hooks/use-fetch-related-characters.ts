import { useFetchCharactersQuery } from '../../graphql/apollo.types.generated.ts';
import { useMemo } from 'react';
import { transformCharacterListResponse } from '../../components/characters/utils.ts';

export function useFetchRelatedCharacters(id?: string, species?: string) {
  const { data, loading } = useFetchCharactersQuery({
    variables: {
      page: 1,
      filter: {
        species,
      },
    },
    skip: !species || !id,
    fetchPolicy: 'no-cache',
  });

  const relatedCharacters = useMemo(() => {
    return transformCharacterListResponse(data)
      .filter((character) => character.id !== id)
      .slice(0, 5);
  }, [data]);

  return {
    relatedCharacters,
    loading,
  };
}
