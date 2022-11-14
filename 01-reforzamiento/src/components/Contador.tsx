import { useState } from "react";

export const Contador = () => {
  const [valor, setValor] = useState(0);

  const acumular = (numero: number): void => {
    setValor((prev) => prev + numero);
  };

  return (
    <>
      <h3>Contador: {valor}</h3>
      <button onClick={() => acumular(1)} className="btn btn-primary m-1">
        +1
      </button>
      <button onClick={() => acumular(-1)} className="btn btn-primary m-1">
        -1
      </button>
    </>
  );
};
