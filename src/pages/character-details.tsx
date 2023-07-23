import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { useFetchCharacterQuery } from '../graphql/apollo.types.generated.ts';
import { Box, Container, Typography } from '@mui/material';
import { transformCharacterResponse } from '../components/character-details/utils.ts';

export function CharacterDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data } = useFetchCharacterQuery({
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
    <Container maxWidth="lg" sx={{ py: '2rem' }}>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box
          component="img"
          src={character?.image}
          sx={{
            width: '300px',
            height: '300px',
            borderRadius: '1.5rem',
            mr: '2rem',
          }}
        />
        <Typography variant="h1" sx={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
          {character?.name}
        </Typography>
      </Box>
    </Container>
  );
}
