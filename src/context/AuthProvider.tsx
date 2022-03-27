import { useEffect, useReducer } from 'react';
import { Props, User } from '../interfaces/interfaces';
import { AuthContext } from './AuthContext';
import { AuthReducer } from './AuthReducer';


const init = () => {
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) as User : { name: '', logged: false } as User;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(AuthReducer, { name: '', logged: false } as User, init);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
