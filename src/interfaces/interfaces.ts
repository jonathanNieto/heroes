export interface User {
  name: string;
  logged: boolean;
}

export interface Action {
  type: string;
  payload?: User;
}

export interface Props {
  children: JSX.Element | JSX.Element[];
}
