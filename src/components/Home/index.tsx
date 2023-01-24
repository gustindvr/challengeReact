import { useState } from 'react';
import { People } from '../../store/interfaces/interfaces';
import PaginationComp from '../common/Pagination';
import ListCharacters from './ListCharacters';

import Search from './Search';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Search />
      <ListCharacters />
      <PaginationComp />
    </>
  );
};

export default Home;
