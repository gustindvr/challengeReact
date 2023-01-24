import React from 'react';

import { Button } from '@mui/material';
import { ButtonType, ButtonVariant } from '../../../store/interfaces/types';

import './index.css';

type Props = {
  text: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  onClick: () => void;
};

const ButtonUI = (props: Props) => {
  const { text, type, variant, onClick } = props;

  return (
    <Button
      type={type ? type : 'button'}
      className={`button-ui ${variant ? variant : ''}`}
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};

export default ButtonUI;
