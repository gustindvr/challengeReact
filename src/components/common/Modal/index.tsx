import React, { Dispatch, SetStateAction } from 'react';

import { Modal } from '@mui/material';

import Form from '../Form';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleClose: () => void;
};

const ModalUI = (props: Props) => {
  const { open, setOpen, handleClose } = props;

  return (
    <Modal open={open} onClose={handleClose}>
      <Form setOpen={setOpen} />
    </Modal>
  );
};

export default ModalUI;
