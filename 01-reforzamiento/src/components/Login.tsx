import { useEffect, useReducer } from "react";

interface IAuth {
  name: string | undefined;
  token: string | undefined;
  username: string | undefined;
  validando: boolean;
}

type IAuthAction =
  | { type: "logout" }
  | { type: "login"; payload: { username: string; name: string } };

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

    case "login":
      return {
        name: action.payload.name,
        token: "ABC123",
        username: action.payload.username,
        validando: false,
      };

    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  const login = () => {
    dispatch({
      type: "login",
      payload: { name: "Tomas", username: "tomascoding" },
    });
  };

  const logout = () => dispatch({ type: "logout" });

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
      <h3>Login</h3>
      {token ? (
        <>
          <div className="alert alert-success">
            Autenticado como: <b>{name}</b>
          </div>
          <button onClick={logout} className="btn btn-danger m-1">
            Logout
          </button>
        </>
      ) : (
        <>
          <div className="alert alert-danger">No autenticado</div>
          <button onClick={login} className="btn btn-primary m-1">
            Login
          </button>
        </>
      )}
    </>
  );
};
