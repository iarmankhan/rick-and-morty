import { useFetchCharactersQuery } from '../graphql/apollo.types.generated.ts';
import { Container } from '@mui/material';
import { transformCharacterListResponse } from '../components/characters/utils.ts';
import { useMemo } from 'react';
import { CharactersList } from '../components/characters/characters-list.tsx';

export function Characters() {
  const { data, loading, error } = useFetchCharactersQuery({
    variables: {
      page: 1,
    },
  });

  const items = useMemo(() => transformCharacterListResponse(data), [data]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error!</div>;

  return (
    <Container maxWidth="lg">
      <CharactersList characters={items} />
    </Container>
  );
}
