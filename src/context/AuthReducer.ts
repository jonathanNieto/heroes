import { Action, User } from '../interfaces/interfaces';
import { actionTypes } from '../types/types';

export const AuthReducer = (state : User, action: Action): User => {
  switch (action.type) {
    case actionTypes.login:
      return {
        name: action?.payload?.name || '',
        logged: true,
      };
    case actionTypes.logout:
      return {
        name: '',
        logged: false,
      };
    default:
      return state;
  }
};
