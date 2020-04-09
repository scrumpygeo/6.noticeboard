import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_NOTES,
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
