import { SET_GUEST_ID } from './actionTypes';

export const setGuestId = (id) => {
  return {
    type: SET_GUEST_ID,
    payload: id
  };
};
