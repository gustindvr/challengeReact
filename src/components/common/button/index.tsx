import React from 'react';

import { Button } from '@mui/material';
import { ButtonVariant } from '../../../store/interfaces/types';

import './index.css';

type Props = {
  text: string;
  variant?: ButtonVariant;
  onClick: () => void;
};

const ButtonUI = (props: Props) => {
  const { text, variant, onClick } = props;

  return (
    <Button
      className={`button-ui ${variant ? variant : ''}`}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};

export default ButtonUI;
