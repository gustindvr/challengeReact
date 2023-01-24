import { Dispatch } from '..';
import { People } from '../interfaces/interfaces';

export const setCharacter = (character: People) => {
  return async (dispatch: Dispatch) => {
    try {
      setLoadingCharacter(true);

      dispatch({
        type: 'character/setCharacter',
        payload: character,
      });

      setLoadingCharacter(false);
    } catch (error) {
      dispatch({
        type: 'character/setError',
        payload: {
          title: 'Error en el servidor',
          mensaje: 'Por favor intente nuevamente',
        },
      });
      setLoadingCharacter(false);
    }
  };
};

export const setError = (text: string, title: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'character/setError',
      payload: {
        title: title,
        message: text,
      },
    });
  };
};

export const setLoadingCharacter = (loading: boolean) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'character/setFilms',
      payload: loading,
    });
  };
};
