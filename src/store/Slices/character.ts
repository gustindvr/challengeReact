import { createSlice } from '@reduxjs/toolkit';
import { People } from '../interfaces/interfaces';

export interface initialData {
  character: People;
  loading: boolean;
  error: Record<string | number, string | number>;
}

export const initialState: initialData = {
  character: {
    name: '',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [''],
    species: [''],
    vehicles: [''],
    starships: [''],
    created: '',
    edited: '',
    url: '',
  },
  loading: false,
  error: {
    title: '',
    message: '',
  },
};

export const characterSlices = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload;
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

export const { setCharacter, setError, removeError } = characterSlices.actions;
export default characterSlices.reducer;
