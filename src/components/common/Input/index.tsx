import React from 'react';

import './index.css';

type Props = {
  textValue: string;
  searchCharacter: (e: string) => void;
};

const SearchInput = (props: Props) => {
  const { searchCharacter, textValue } = props;

  return (
    <input
      className='input-search'
      type='text'
      placeholder='Darth Vader'
      value={textValue}
      onChange={(e) => searchCharacter(e.target.value)}
    />
  );
};

export default SearchInput;
