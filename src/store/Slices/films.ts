import { createSlice } from '@reduxjs/toolkit';
import { Films } from '../interfaces/interfaces';

export interface initialData {
  films: Array<Films>;
  loading: boolean;
  error: Record<string | number, string | number>;
}

export const initialState: initialData = {
  films: [],
  loading: false,
  error: {
    title: '',
    message: '',
  },
};

export const FilmsSlices = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: (state, action) => {
      state.films = action.payload;
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

export const {} = FilmsSlices.actions;
export default FilmsSlices.reducer;
