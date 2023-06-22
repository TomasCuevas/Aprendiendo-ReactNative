import { useRef, useState } from "react";

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalc = () => {
  const [number, setNumber] = useState("0");
  const [previousNumber, setPreviousNumber] = useState<string | undefined>("0");

  const lastOperation = useRef<Operadores>();

  const clear = () => {
    setNumber("0");
    setPreviousNumber(undefined);
  };

  const buildNumber = (numeroTexto: string) => {
    //? No aceptar doble punto
    if (number.includes(".") && numeroTexto === ".") {
      return;
    }

    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numeroTexto === "." || number.includes(".")) {
        setNumber(number + numeroTexto);
      } else {
        setNumber(numeroTexto);
      }
      return;
    }

    //? Concatenar todos los demas inputs
    setNumber((prev) => prev + numeroTexto);
  };

  const positiveNegative = () => {
    if (number.includes("-")) {
      setNumber((prev) => prev.replace("-", ""));
    } else {
      setNumber((prev) => "-" + prev);
    }
  };

  const deleteLast = () => {
    if (number.length === 1) {
      return setNumber("0");
    }

    if (number.includes("-") && number.length === 2) {
      return setNumber("0");
    }

    setNumber((prev) => prev.substring(0, prev.length - 1));
  };

  const changeNumberForPrevious = () => {
    if (number.endsWith(".")) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber("0");
  };

  const divideButton = () => {
    changeNumberForPrevious();
    lastOperation.current = Operadores.dividir;
  };

  const multiplyButton = () => {
    changeNumberForPrevious();
    lastOperation.current = Operadores.multiplicar;
  };

  const restButton = () => {
    changeNumberForPrevious();
    lastOperation.current = Operadores.restar;
  };

  const sumButton = () => {
    changeNumberForPrevious();
    lastOperation.current = Operadores.sumar;
  };

  const calc = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    if (!previousNumber) {
      return;
    }

    switch (lastOperation.current) {
      case Operadores.sumar:
        setNumber(
          `${(num2 + num1) % 1 === 0 ? num2 + num1 : (num2 + num1).toFixed(2)}`
        );
        break;
      case Operadores.restar:
        setNumber(
          `${(num2 - num1) % 1 === 0 ? num2 - num1 : (num2 - num1).toFixed(2)}`
        );
        break;
      case Operadores.multiplicar:
        setNumber(
          `${(num2 * num1) % 1 === 0 ? num2 * num1 : (num2 * num1).toFixed(2)}`
        );
        break;
      case Operadores.dividir:
        if (num1 === 0 && num2 === 0) {
          setNumber("0");
        } else {
          setNumber(
            `${
              (num2 / num1) % 1 === 0 ? num2 / num1 : (num2 / num1).toFixed(2)
            }`
          );
        }
        break;
      default:
    }

    setPreviousNumber(undefined);
  };

  return {
    //? getters
    number,
    previousNumber,

    //? methods
    clear,
    buildNumber,
    positiveNegative,
    deleteLast,
    divideButton,
    multiplyButton,
    restButton,
    sumButton,
    calc,
  };
};
