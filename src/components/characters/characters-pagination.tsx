import { Box, Pagination } from '@mui/material';
import { useState } from 'react';

interface CharactersPaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function CharactersPagination(props: CharactersPaginationProps) {
  const [page, setPage] = useState(1);

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
          props.onPageChange(newPage);
        }}
      />
    </Box>
  );
}
