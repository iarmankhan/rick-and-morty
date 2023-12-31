import { Character, CharacterCard } from './character-card.tsx';
import { Box, Typography } from '@mui/material';
import { CharacterCardLoading } from './character-card-loading.tsx';

interface CharactersListProps {
  characters: Character[];
  loading?: boolean;
  error?: Error;
  loadingCards?: number;
  small?: boolean;
}

const LoadingCards = ({ loadingCards, small }: { loadingCards: number; small?: boolean }) => {
  return new Array(loadingCards).fill(0).map((_, index) => {
    return <CharacterCardLoading key={index} small={small} />;
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
        <LoadingCards loadingCards={props.loadingCards || 20} small={props.small} />
      ) : !props.characters?.length ? (
        <Box
          sx={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6">No characters found</Typography>
        </Box>
      ) : (
        props.characters.map((character) => {
          return <CharacterCard key={character.id} character={character} small={props.small} />;
        })
      )}
    </Box>
  );
}
