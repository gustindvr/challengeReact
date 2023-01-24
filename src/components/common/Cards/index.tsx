import { CardContent, Collapse, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';

import ButtonUI from '../button';
import { Films, People } from '../../../store/interfaces/interfaces';

import './index.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { filteredCharacters } from '../../../store/actions/setCharacters';
import { useContext, useState } from 'react';

type Props = {
  character: People;
  films: Array<Films>;
};

const CharacterCard = (props: Props) => {
  const { character, films } = props;

  const [moreInfo, setMoreInfo] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state?.characters);

  const validateGender = (value: string) => {
    if (value === 'male') return 'Hombre';
    if (value === 'female') return 'Mujer';
    if (value === 'n/a') return 'No aplica';
  };

  const deleteCharacter = (character: People) => {
    const filterCharacter = characters?.filter((c: People) => {
      return c?.name !== character?.name;
    });

    dispatch(filteredCharacters(filterCharacter));
  };

  return (
    <div className='container-cards'>
      <motion.div whileHover={{ scale: 1.1 }}>
        <Card>
          <Typography className='title-name-character'>
            {character?.name}
          </Typography>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Género: {validateGender(character?.gender)}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Altura: {character?.height}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Peso: {character?.mass}
            </Typography>
          </CardContent>

          <ButtonUI
            variant='dropdown'
            text={`Mostrar ${moreInfo ? 'menos' : 'mas'}`}
            onClick={() => setMoreInfo(!moreInfo)}
          />

          <Collapse in={moreInfo} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography variant='body2' color='text.secondary'>
                Peliculas:{' '}
              </Typography>
              <ul>
                {character?.films?.map((film) =>
                  films?.map(
                    (f) => f?.url.includes(film) && <li>{f?.title}</li>
                  )
                )}
              </ul>
            </CardContent>
          </Collapse>
          <div className='container-delete-button'>
            <ButtonUI
              variant='secondary'
              text='Eliminar'
              onClick={() => deleteCharacter(character)}
            />
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default CharacterCard;
