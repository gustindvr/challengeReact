import { createSlice } from '@reduxjs/toolkit';
import { People } from '../interfaces/interfaces';

export interface initialData {
  characters: Array<People>;
  loading: boolean;
  total: number;
  error: Record<string | number, string | number>;
}

export const initialState: initialData = {
  characters: [],
  total: 0,
  loading: false,
  error: {
    title: '',
    message: '',
  },
};

export const charactersSlices = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.characters = action.payload;
    },

    setFilteredCharacters: (state, action) => {
      state.characters = action.payload;
    },

    setTotal: (state, action) => {
      state.total = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },

    removeError: (state, action) => {
      state.error = initialState.error;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCharacters, setError, removeError } =
  charactersSlices.actions;
export default charactersSlices.reducer;
