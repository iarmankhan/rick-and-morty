import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
  small?: boolean;
}

export function CharacterCard(props: CharacterCardProps) {
  const { character, small } = props;

  return (
    <Link to={`/${character.id}`}>
      <Box
        sx={{
          width: small ? 200 : 300,
          height: small ? 300 : 400,
          borderRadius: '1.5rem',
          position: 'relative',
          boxShadow: '0 0 1rem rgba(0, 0, 0, 0.2)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            borderRadius: '1.5rem',
            overflow: 'hidden',
            cursor: 'pointer',
            p: '1rem',

            '&:hover': {
              '& .character-image': {
                transform: 'scale(1.1)',
              },
            },
          }}
        >
          <Box
            component="img"
            src={typeof character.image === 'string' ? character.image : undefined}
            alt={character.name}
            className="character-image"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0,
              transition: 'transform 0.3s ease-in-out',
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              background: 'rgba(0, 0, 0, 0.5)',
              width: '100%',
              height: '100px',
              display: 'block',
              position: 'absolute',
              bottom: 0,
              left: 0,
              zIndex: 2,
              boxShadow: '0 0 10px 20px rgba(0, 0, 0, 0.5)',
              filter: 'blur(10px)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              zIndex: 3,
              width: '100%',
              padding: '1rem',
              color: 'white',
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 'bold',
                fontSize: small ? '1.5rem' : '2rem',
              }}
            >
              {character.name}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="body2">Species: {character.species}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
