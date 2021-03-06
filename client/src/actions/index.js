import history from '../history';
import notes from '../apis/notes';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_NOTE,
  FETCH_NOTES,
  FETCH_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createNote = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await notes.post('/notes', { ...formValues, userId });

  dispatch({ type: CREATE_NOTE, payload: response.data });
  history.push('/');
};

export const fetchNotes = () => async (dispatch) => {
  const response = await notes.get('/notes');

  dispatch({ type: FETCH_NOTES, payload: response.data });
};

export const fetchNote = (id) => async (dispatch) => {
  const response = await notes.get(`/notes/${id}`);

  dispatch({ type: FETCH_NOTE, payload: response.data });
};

export const editNote = (id, formValues) => async (dispatch) => {
  const response = await notes.patch(`/notes/${id}`, formValues);

  dispatch({ type: EDIT_NOTE, payload: response.data });
  history.push('/');
};

export const deleteNote = (id) => async (dispatch) => {
  await notes.delete(`/notes/${id}`);

  dispatch({ type: DELETE_NOTE, payload: id });
  history.push('/');
};
