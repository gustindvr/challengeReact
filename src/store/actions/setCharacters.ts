import { FieldValues } from 'react-hook-form/dist/types';
import { Api } from '../../api';
import { Dispatch } from '../index';
import { People } from '../interfaces/interfaces';

export const getCharacters = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: 'characters/setLoading',
        payload: true,
      });

      dispatch({
        type: 'characters/removeError',
      });

      const result = await Api.get('people');

      if (result?.status === 200) {
        dispatch({
          type: 'characters/setCharacters',
          payload: result?.data?.results,
        });
        dispatch({
          type: 'characters/setTotal',
          payload: result?.data?.count,
        });
        dispatch({
          type: 'characters/setLoading',
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: 'characters/setError',
        payload: {
          title: 'Error en el servidor',
          mensaje: 'Por favor intente nuevamente',
        },
      });
    }
  };
};

export const filteredCharacters = (characters: Array<People>) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'characters/removeError',
    });

    dispatch({
      type: 'characters/setFilteredCharacters',
      payload: characters,
    });
  };
};

export const searchCharacters = (text: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'characters/setLoading',
      payload: true,
    });

    dispatch({
      type: 'characters/removeError',
    });

    const res = await Api.get('/people', {
      params: {
        search: text,
      },
    });

    if (res?.status === 200) {
      dispatch({
        type: 'characters/setCharacters',
        payload: res?.data?.results,
      });
      dispatch({
        type: 'characters/setLoading',
        payload: false,
      });
    }
  };
};

export const setError = (text: string, title: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'characters/setError',
      payload: {
        title: title,
        message: text,
      },
    });
  };
};

export const handlePagination = (page: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        type: 'characters/setLoading',
        payload: true,
      });

      dispatch({
        type: 'characters/removeError',
      });

      const res = await Api?.get(`people`, {
        params: {
          page: page,
        },
      });

      if (res?.status === 200) {
        dispatch({
          type: 'characters/setCharacters',
          payload: res?.data?.results,
        });
        dispatch({
          type: 'characters/setLoading',
          payload: false,
        });
      } else {
        dispatch({
          type: 'characters/setError',
          payload: {
            title: 'Error al intentar traer los datos',
            message: 'Intene de nuevo en unos instantes',
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const newCharacter = (character: FieldValues) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'characters/setNewCharacter',
      payload: character,
    });
  };
};
