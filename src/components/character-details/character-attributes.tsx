import { InfoRounded, PlaceRounded, WcRounded } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Character } from '../characters/character-card.tsx';
import Diversity2RoundedIcon from '@mui/icons-material/Diversity2Rounded';

interface CharacterInfoProps {
  character: Character;
}

export function CharacterAttributes(props: CharacterInfoProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        my: 3,
        gap: '1rem',
      }}
    >
      <CharacterInfoItem icon={<PlaceRounded />} label={props.character.location ?? 'Unknown'} />
      <CharacterInfoItem icon={<WcRounded />} label={'Gender: ' + props.character.gender ?? 'Unknown'} />
      <CharacterInfoItem icon={<Diversity2RoundedIcon />} label={'Species: ' + props.character.species ?? 'Unknown'} />
      <CharacterInfoItem icon={<InfoRounded />} label={'Status: ' + props.character.status ?? 'Unknown'} />
    </Box>
  );
}

interface CharacterInfoItemProps {
  icon: ReactNode;
  label: string;
}

function CharacterInfoItem({ icon, label }: CharacterInfoItemProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        borderRadius: '1rem',
        border: '1px solid #ccc',
      }}
    >
      {icon}
      <Typography variant="body1" sx={{ ml: 1, fontWeight: 'medium', textAlign: 'center' }}>
        {label}
      </Typography>
    </Box>
  );
}
