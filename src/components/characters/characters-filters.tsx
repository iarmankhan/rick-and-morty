import { Box, debounce, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useRickAndMortyStore } from '../../lib/store.ts';
import { SearchRounded } from '@mui/icons-material';
import { useCallback, useEffect, useState } from 'react';

export type Filters = {
  search: string;
  gender: 'Male' | 'Female' | 'unknown' | '';
};

export function CharactersFilters() {
  const [searchValue, setSearchValue] = useState('');

  const search = useRickAndMortyStore((state) => state.search);
  const setSearch = useRickAndMortyStore((state) => state.setSearch);

  const gender = useRickAndMortyStore((state) => state.gender);
  const setGender = useRickAndMortyStore((state) => state.setGender);

  const setPage = useRickAndMortyStore((state) => state.setPage);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
      setPage(1);
    }, 1000),
    [gender],
  );

  useEffect(() => {
    setSearchValue(search);
  }, [search]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          debouncedSearch(e.target.value);
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
            setPage(1);
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
