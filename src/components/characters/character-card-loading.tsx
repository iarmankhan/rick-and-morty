import { Skeleton } from '@mui/material';

export function CharacterCardLoading({ small }: { small?: boolean }) {
  return (
    <Skeleton
      variant="rectangular"
      width={small ? 200 : 300}
      height={small ? 300 : 400}
      sx={{
        borderRadius: '1.5rem',
        position: 'relative',
      }}
    ></Skeleton>
  );
}
