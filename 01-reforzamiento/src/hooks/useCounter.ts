import { useState } from "react";

interface Return {
  valor: number;
  acumular: (numero: number) => void;
}

export const useCounter = (): Return => {
  const [valor, setValor] = useState(0);

  const acumular = (numero: number): void => {
    setValor((prev) => prev + numero);
  };

  return {
    valor,
    acumular,
  };
};
