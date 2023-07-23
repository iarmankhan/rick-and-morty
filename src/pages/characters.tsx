import { useFetchCharactersQuery } from '../graphql/apollo.types.generated.ts';
import { Container, Typography } from '@mui/material';
import { transformCharacterListResponse } from '../components/characters/utils.ts';
import { useMemo } from 'react';
import { CharactersList } from '../components/characters/characters-list.tsx';
import { CharactersPagination } from '../components/characters/characters-pagination.tsx';

export function Characters() {
  const { data, loading, error, fetchMore } = useFetchCharactersQuery({
    variables: {
      page: 1,
      filter: {},
    },
    notifyOnNetworkStatusChange: true,
  });

  const items = useMemo(() => transformCharacterListResponse(data), [data]);
  const page = data?.characters?.info?.pages ?? 0;

  const onPageChange = async (newPage: number) => {
    await fetchMore({
      variables: {
        page: newPage,
      },
    });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ my: '2rem', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        Rick and Morty Characters
      </Typography>
      <CharactersList characters={items} loading={loading} error={error} />
      <CharactersPagination totalPages={page} onPageChange={onPageChange} />
    </Container>
  );
}
