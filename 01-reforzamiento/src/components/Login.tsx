import { useEffect, useReducer } from "react";

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
  switch (action.type) {
    case "logout":
      return {
        name: undefined,
        token: undefined,
        username: undefined,
        validando: false,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando...</div>
      </>
    );
  }

  return (
    <>
      <div className="alert alert-danger">No autenticado</div>
      <div className="alert alert-success">Autenticado</div>
      <button className="btn btn-primary m-1">Login</button>
      <button className="btn btn-danger m-1">Logout</button>
    </>
  );
};
