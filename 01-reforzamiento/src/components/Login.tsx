import { useReducer } from "react";

interface IAuth {
  name: string | undefined;
  token: string | undefined;
  username: string | undefined;
  validando: boolean;
}

type IAuthAction = {
  type: "logout";
};

const initialState: IAuth = {
  name: undefined,
  token: undefined,
  username: undefined,
  validando: true,
};

const authReducer = (state: IAuth, action: IAuthAction): IAuth => {
  return state;
};

export const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <>
      <h3>Login</h3>
      <div className="alert alert-info">Validando...</div>
      <div className="alert alert-danger">No autenticado</div>
      <div className="alert alert-success">Autenticado</div>
      <button className="btn btn-primary">Login</button>
      <button className="btn btn-danger">Logout</button>
    </>
  );
};
