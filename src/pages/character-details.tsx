import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useFetchCharacterQuery } from '../graphql/apollo.types.generated.ts';
import { Container, IconButton } from '@mui/material';
import { transformCharacterResponse } from '../components/character-details/utils.ts';
import { CharacterAttributes } from '../components/character-details/character-attributes.tsx';
import { CharacterInfo } from '../components/character-details/character-info.tsx';
import { CharacterLoading } from '../components/character-details/character-loading.tsx';
import { RelatedCharacters } from '../components/character-details/related-characters.tsx';
import { ChevronLeft } from '@mui/icons-material';

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

  return (
    <Container maxWidth="lg" sx={{ py: '2rem', position: 'relative' }}>
      <IconButton
        sx={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
        }}
        onClick={() => navigate(-1)}
      >
        <ChevronLeft
          sx={{
            color: '#eee',
            fontSize: '2rem',
          }}
        />
      </IconButton>
      {loading ? (
        <CharacterLoading />
      ) : (
        <>
          <CharacterInfo character={character!} />
          <CharacterAttributes character={character!} />
        </>
      )}
      <RelatedCharacters character={character!} />
    </Container>
  );
}
