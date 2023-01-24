import { Pagination, Stack } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import {
  getCharacters,
  handlePagination,
} from '../../../store/actions/setCharacters';

import './index.css';

type Props = {};

const PaginationComp = (props: Props) => {
  const { total } = useAppSelector((state) => state?.characters);

  const steps = Math.ceil(total / 10);

  const dispatch = useAppDispatch();

  const handleChangeStep = (_e: ChangeEvent<unknown>, value: number) => {
    dispatch(handlePagination(value?.toString()));
  };

  return (
    <div className='container-pagination'>
      <Stack spacing={2}>
        <Pagination
          count={steps}
          color='secondary'
          size='small'
          siblingCount={window.innerWidth < 350 ? 0 : 1}
          onChange={(e, value) => handleChangeStep(e, value)}
        />
      </Stack>
    </div>
  );
};

export default PaginationComp;
