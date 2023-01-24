import { configureStore } from '@reduxjs/toolkit';
import characterSlices from './Slices/character';
import charactersSlices from './Slices/characters';
import FilmsSlices from './Slices/films';

export const store = configureStore({
  reducer: {
    characters: charactersSlices,
    character: characterSlices,
    films: FilmsSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export default store;
