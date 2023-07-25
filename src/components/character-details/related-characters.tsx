import { useFetchRelatedCharacters } from '../../lib/hooks/use-fetch-related-characters.ts';
import { Character } from '../characters/character-card.tsx';
import { CharactersList } from '../characters/characters-list.tsx';
import { Box, Typography } from '@mui/material';

interface RelatedCharactersProps {
  character: Character;
}

export function RelatedCharacters({ character }: RelatedCharactersProps) {
  const { relatedCharacters, loading } = useFetchRelatedCharacters(character?.id ?? '', character?.species ?? '');

  return (
    <Box
      sx={{
        mt: 8,
      }}
    >
      <Typography variant="h3" sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#eee', textAlign: 'center' }}>
        Related Characters
      </Typography>
      <CharactersList characters={relatedCharacters} loading={loading || !character?.species} loadingCards={5} small />
    </Box>
  );
}
