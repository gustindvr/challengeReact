import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  getCharacters,
  searchCharacters,
} from '../../../store/actions/setCharacters';
import { setError } from '../../../store/Slices/characters';

import ButtonUI from '../../common/button';
import SearchInput from '../../common/Input';

import './index.css';

type Props = {};

const Search = (props: Props) => {
  const [textValue, setTextValue] = useState<string>('');

  const { error } = useAppSelector((state) => state?.characters);

  const dispatch = useAppDispatch();

  const searchCharacter = (e: string) => {
    setTextValue(e);
  };

  const handleFilterCharacter = () => {
    if (textValue?.length >= 2) {
      dispatch(searchCharacters(textValue));
    } else if (textValue?.trim()?.length === 0) {
      dispatch(getCharacters());
    } else {
      dispatch(
        setError({
          title: '...Ops! hubo un error',
          text: 'Debe contener al menos 2 letras',
        })
      );
    }
  };

  return (
    <div className='container-search'>
      <SearchInput textValue={textValue} searchCharacter={searchCharacter} />

      {error?.title && error?.text && (
        <>
          <Typography className='error-search'>{error?.title}</Typography>
          <Typography className='error-search'>{error?.text}</Typography>
        </>
      )}

      <ButtonUI
        text='Buscar'
        variant='principal'
        onClick={handleFilterCharacter}
      />
    </div>
  );
};

export default Search;
