import { Dispatch } from '..';
import { Api } from '../../api';

export const getFilms = () => {
  return async (dispatch: Dispatch) => {
    try {
      setLoadingFilm(true);

      const result = await Api.get(`films`);

      if (result?.status === 200) {
        dispatch({
          type: 'films/setFilms',
          payload: result?.data?.results,
        });
        setLoadingFilm(false);
      }
    } catch (error) {
      dispatch({
        type: 'characters/setError',
        payload: {
          title: 'Error en el servidor',
          mensaje: 'Por favor intente nuevamente',
        },
      });
      setLoadingFilm(false);
    }
  };
};

export const setLoadingFilm = (loading: boolean) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: 'character/setLoading',
      payload: loading,
    });
  };
};
