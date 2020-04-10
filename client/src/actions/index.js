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

export const createNote = (formValues) => async (dispatch) => {
  const response = await notes.post('/notes', formValues);

  dispatch({ type: CREATE_NOTE, payload: response.data });
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
  const response = await notes.put(`/notes/${id}`, formValues);

  dispatch({ type: EDIT_NOTE, payload: response.data });
};

export const deleteNote = (id) => async (dispatch) => {
  await notes.delete(`/notes/${id}`);

  dispatch({ type: DELETE_NOTE, payload: id });
};
