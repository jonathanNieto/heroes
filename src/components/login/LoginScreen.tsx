import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { actionTypes } from '../../types/types';

export const LoginScreen = () => {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    const action = {
      type: actionTypes.login,
      payload: {
        name: 'John D3v3lop3r'
      }
    };
    dispatch(action);
    const lastPath = localStorage.getItem('lastPath') || '/marvel';
    navigate(lastPath, { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};
