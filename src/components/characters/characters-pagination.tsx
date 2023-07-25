import { Box, Pagination } from '@mui/material';
import { useRickAndMortyStore } from '../../lib/store.ts';

interface CharactersPaginationProps {
  totalPages: number;
}

export function CharactersPagination(props: CharactersPaginationProps) {
  const page = useRickAndMortyStore((state) => state.page);
  const setPage = useRickAndMortyStore((state) => state.setPage);

  return (
    <Box
      sx={{
        my: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Pagination
        page={page}
        count={props.totalPages}
        onChange={(_, newPage) => {
          setPage(newPage);
        }}
      />
    </Box>
  );
}
