import { Box, CircularProgress, Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { getCharacters } from '../../../store/actions/setCharacters';
import { getFilms } from '../../../store/actions/setFilms';
import { People } from '../../../store/interfaces/interfaces';
import CharacterCard from '../../common/Cards';

import './index.css';

type Props = {};

const ListCharacters = (props: Props) => {
  const dispatch = useAppDispatch();

  const { characters, loading } = useAppSelector((state) => state?.characters);
  const { films } = useAppSelector((state) => state?.films);

  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  useEffect(() => {
    dispatch(getCharacters());
    dispatch(getFilms());
  }, []);

  useEffect(() => {
    setFilteredCharacters(characters);
  }, [characters]);

  return (
    <div className='container-list-characters'>
      {loading ? (
        <CircularProgress color='warning' />
      ) : (
        filteredCharacters?.map((character: People) => (
          <CharacterCard character={character} films={films} />
        ))
      )}
    </div>
  );
};

export default ListCharacters;
