import { useState } from 'react';
import ButtonUI from '../common/button';

import ModalUI from '../common/Modal';
import PaginationComp from '../common/Pagination';
import ListCharacters from './ListCharacters';
import Search from './Search';

type Props = {};

const Home = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Search />
        <ButtonUI text='Agregar personaje' onClick={() => setOpen(true)} />
      </div>
      <ListCharacters />
      <PaginationComp />
      <ModalUI
        open={open}
        setOpen={setOpen}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

export default Home;
