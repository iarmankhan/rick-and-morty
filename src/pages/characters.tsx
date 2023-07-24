import { useFetchCharactersQuery } from '../graphql/apollo.types.generated.ts';
import { Container, Typography } from '@mui/material';
import { transformCharacterListResponse } from '../components/characters/utils.ts';
import { useMemo } from 'react';
import { CharactersList } from '../components/characters/characters-list.tsx';
import { CharactersPagination } from '../components/characters/characters-pagination.tsx';
import { CharactersFilters, Filters } from '../components/characters/characters-filters.tsx';
import { useRickAndMortyStore } from '../lib/store.ts';

export function Characters() {
  const storedPage = useRickAndMortyStore((state) => state.page);
  const search = useRickAndMortyStore((state) => state.search);
  const gender = useRickAndMortyStore((state) => state.gender);

  const { data, loading, error, refetch, fetchMore } = useFetchCharactersQuery({
    variables: {
      page: storedPage,
      filter: {
        name: search,
        gender,
      },
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
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

  const onFilterChange = async (filter: Filters) => {
    await refetch({
      filter: {
        name: filter.search,
        gender: filter.gender,
      },
      page: 1,
    });
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h1" sx={{ my: '2rem', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        Rick and Morty Characters
      </Typography>
      <CharactersFilters onChangeFilters={onFilterChange} />
      <CharactersList characters={items} loading={loading} error={error} />
      <CharactersPagination totalPages={page} onPageChange={onPageChange} />
    </Container>
  );
}
