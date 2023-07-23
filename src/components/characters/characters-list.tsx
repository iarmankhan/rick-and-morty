import { Character, CharacterCard } from './character-card.tsx';
import { Box } from '@mui/material';
import { CharacterCardLoading } from './character-card-loading.tsx';

interface CharactersListProps {
  characters: Character[];
  loading?: boolean;
  error?: Error;
}

const LoadingCards = () => {
  return new Array(14).fill(0).map((_, index) => {
    return <CharacterCardLoading key={index} />;
  });
};

export function CharactersList(props: CharactersListProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        py: '2rem',
      }}
    >
      {props.loading ? (
        <LoadingCards />
      ) : (
        props.characters.map((character) => {
          return <CharacterCard key={character.id} character={character} />;
        })
      )}
    </Box>
  );
}
