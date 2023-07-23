import { Character, CharacterCard } from './character-card.tsx';
import { Box } from '@mui/material';

interface CharactersListProps {
  characters: Character[];
}

export function CharactersList(props: CharactersListProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      {props.characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </Box>
  );
}
