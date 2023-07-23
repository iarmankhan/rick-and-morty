import { Box, Typography } from '@mui/material';

export interface Character {
  id: string;
  name: string;
  image: string | null;
  species?: string;
  status?: string;
  gender?: string;
  location?: string;
}

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard(props: CharacterCardProps) {
  const { character } = props;

  return (
    <Box
      sx={{
        width: 300,
        height: 400,
        borderRadius: '4rem',
      }}
    >
      <img src={typeof character.image === 'string' ? character.image : undefined} alt={character.name} />
      <Typography variant="h5" component="div">
        {character.name}
      </Typography>
      <Box>
        <Typography variant="body2" color="text.secondary">
          {character.species}
        </Typography>
      </Box>
    </Box>
  );
}
