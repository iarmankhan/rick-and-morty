import { Box, Typography } from '@mui/material';
import { Character } from '../characters/character-card.tsx';

interface CharacterInfoProps {
  character: Character;
}

export function CharacterInfo({ character }: CharacterInfoProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        component="img"
        src={character?.image ?? undefined}
        alt={character?.name}
        sx={{
          width: '300px',
          height: '300px',
          borderRadius: '1.5rem',
        }}
      />
      <Typography variant="h1" sx={{ fontSize: '2rem', mt: '1.5rem', fontWeight: 'bold', textAlign: 'center' }}>
        {character?.name}
      </Typography>
    </Box>
  );
}
