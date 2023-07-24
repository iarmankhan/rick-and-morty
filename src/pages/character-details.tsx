import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useFetchCharacterQuery } from '../graphql/apollo.types.generated.ts';
import { Container } from '@mui/material';
import { transformCharacterResponse } from '../components/character-details/utils.ts';
import { CharacterAttributes } from '../components/character-details/character-attributes.tsx';
import { CharacterInfo } from '../components/character-details/character-info.tsx';
import { CharacterLoading } from '../components/character-details/character-loading.tsx';

export function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useFetchCharacterQuery({
    variables: {
      id: id!,
    },
    skip: !id,
  });

  useEffect(() => {
    if (!id || !Number.isInteger(Number(id))) {
      navigate('/');
    }
  }, [id]);

  const character = useMemo(() => transformCharacterResponse(data), [data]);

  if (!id || !Number.isInteger(Number(id))) {
    return null;
  }

  if (loading) {
    return <CharacterLoading />;
  }

  return (
    <Container maxWidth="lg" sx={{ py: '2rem' }}>
      <CharacterInfo character={character!} />
      <CharacterAttributes character={character!} />
    </Container>
  );
}
