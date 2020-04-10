import {
  FETCH_NOTE,
  FETCH_NOTES,
  CREATE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_NOTE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_NOTE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
