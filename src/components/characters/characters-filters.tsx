import { Box, debounce, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useRickAndMortyStore } from '../../lib/store.ts';
import { SearchRounded } from '@mui/icons-material';

export type Filters = {
  search: string;
  gender: 'Male' | 'Female' | 'unknown' | '';
};

interface CharactersFiltersProps {
  onChangeFilters: (filters: Filters) => void;
}

export function CharactersFilters(props: CharactersFiltersProps) {
  const search = useRickAndMortyStore((state) => state.search);
  const setSearch = useRickAndMortyStore((state) => state.setSearch);

  const gender = useRickAndMortyStore((state) => state.gender);
  const setGender = useRickAndMortyStore((state) => state.setGender);

  const setPage = useRickAndMortyStore((state) => state.setPage);

  const debouncedFilterChange = debounce((newFilters: Filters) => {
    props.onChangeFilters(newFilters);
    setPage(1);
  }, 1000);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          debouncedFilterChange({
            search: e.target.value,
            gender,
          });
        }}
        type={'search'}
        placeholder="Search..."
        size="small"
        sx={{
          width: '300px',
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          ),
        }}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="gender-filter-label">Gender</InputLabel>
        <Select
          labelId="gender-filter-label"
          id="gender-filter"
          value={gender}
          label="Gender"
          onChange={(e) => {
            setGender(e.target.value as never);
            debouncedFilterChange({
              search,
              gender: e.target.value as never,
            });
          }}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'unknown'}>Unknown</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
