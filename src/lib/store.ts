import { create } from 'zustand';

interface RickAndMortyState {
  page: number;
  setPage: (page: number) => void;

  search: string;
  setSearch: (search: string) => void;

  gender: 'Male' | 'Female' | 'unknown' | '';
  setGender: (newGender: 'Male' | 'Female' | 'unknown' | '') => void;
}

export const useRickAndMortyStore = create<RickAndMortyState>((set) => ({
  page: 1,
  setPage: (page) => set({ page }),

  search: '',
  setSearch: (search) => set({ search }),

  gender: '',
  setGender: (gender) => set({ gender }),
}));
