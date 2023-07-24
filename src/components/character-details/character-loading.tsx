import { Box, Skeleton } from '@mui/material';

export function CharacterLoading() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Skeleton
          variant="rectangular"
          width="300px"
          height="300px"
          sx={{
            borderRadius: '1.5rem',
          }}
        />
        <Skeleton
          variant="text"
          width="200px"
          height="50px"
          sx={{
            mt: '1.5rem',
          }}
        ></Skeleton>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          my: 3,
          gap: '1rem',
        }}
      >
        <Skeleton
          variant="rectangular"
          height="80px"
          sx={{ padding: 2, borderRadius: '1rem', border: '1px solid #ccc' }}
        ></Skeleton>
        <Skeleton
          variant="rectangular"
          height="80px"
          sx={{ padding: 2, borderRadius: '1rem', border: '1px solid #ccc' }}
        ></Skeleton>
        <Skeleton
          variant="rectangular"
          height="80px"
          sx={{ padding: 2, borderRadius: '1rem', border: '1px solid #ccc' }}
        ></Skeleton>
        <Skeleton
          variant="rectangular"
          height="80px"
          sx={{ padding: 2, borderRadius: '1rem', border: '1px solid #ccc' }}
        ></Skeleton>
      </Box>
    </>
  );
}
