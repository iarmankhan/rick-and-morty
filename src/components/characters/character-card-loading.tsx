import { Skeleton } from '@mui/material';

export function CharacterCardLoading() {
  return (
    <Skeleton
      variant="rectangular"
      width={300}
      height={400}
      sx={{
        borderRadius: '1.5rem',
        position: 'relative',
      }}
    ></Skeleton>
  );
}
