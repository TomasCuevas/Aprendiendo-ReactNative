import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

export const App = () => {
  return (
    <>
      <h1 className="mt-2">Introduccion a React con Typescript</h1>
      <hr />
      {/* <TiposBasicos /> */}
      {/* <ObjetosLiterales /> */}
      {/* <Funciones /> */}
      {/* <Contador /> */}
      {/* <ContadorConHook /> */}
      {/* <Login /> */}
      <Usuarios />
    </>
  );
};
