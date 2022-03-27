import { createContext } from 'react';
import { User } from '../interfaces/interfaces';

export interface AuthContextProps {
  user: User;
  dispatch: React.Dispatch<any>;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
