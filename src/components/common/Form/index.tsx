import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

import { Typography } from '@mui/material';

import ButtonUI from '../button';

import './index.css';
import { useAppDispatch } from '../../../hooks/redux';
import { newCharacter } from '../../../store/actions/setCharacters';

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Form = (props: Props) => {
  const { setOpen } = props;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const { fields, append, remove } = useFieldArray({ name: 'films', control });

  const dispatch = useAppDispatch();

  const films = watch('films');

  useEffect(() => {
    const newVal = parseInt(films || 0);
    const oldVal = fields.length;
    if (newVal > oldVal) {
      // append tickets to field array
      for (let i = oldVal; i < newVal; i++) {
        append({ title: '' });
      }
    } else {
      // remove tickets from field array
      for (let i = oldVal; i > newVal; i--) {
        remove(i - 1);
      }
    }
  }, [films]);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        dispatch(newCharacter(data));
        setOpen(false);
      })}
      className='container-form'
    >
      <div className='container-inputs'>
        <label>
          Nombre completo <span>*</span>
        </label>
        <input {...register('name', { required: true })} />
        {errors.name && <Typography>El campo es obligatorio</Typography>}
      </div>
      <div className='container-inputs'>
        <label>
          Género <span>*</span>
        </label>
        <select {...register('gender', { required: true })}>
          <option value=''></option>
          <option value='female'>Mujer</option>
          <option value='male'>Hombre</option>
          <option value='n/a'>No aplica</option>
        </select>
        {errors.gender && <Typography>El campo es obligatorio</Typography>}
      </div>
      <div className='container-inputs'>
        <label>
          Altura <span>*</span>
        </label>
        <input {...register('height', { required: true, pattern: /^[0-9]/ })} />
        {errors.height && <Typography>El campo debe ser un número</Typography>}
      </div>
      <div className='container-inputs'>
        <label>
          Peso <span>*</span>
        </label>
        <input {...register('mass', { required: true, pattern: /^[0-9]/ })} />
        {errors.mass && <Typography>El campo debe ser un número</Typography>}
      </div>
      <div className='container-inputs'>
        <label>Peliculas</label>
        <select {...register('films')}>
          {['', 1, 2, 3, 4, 5, 6].map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        {fields.map((item, i) => (
          <div key={i} className='list-group list-group-flush'>
            <div className='list-group-item'>
              <h5 className='card-title'>Pelicula {i + 1}</h5>
              <div className='form-row'>
                <div className='form-group col-6'>
                  <label>Título</label>
                  <input
                    {...register(`films.${i}.title`, { required: true })}
                    type='text'
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ButtonUI
        text='Enviar'
        type='submit'
        variant='secondary'
        onClick={() => {
          handleSubmit((data) => console.log(data));
        }}
      />
    </form>
  );
};

export default Form;
