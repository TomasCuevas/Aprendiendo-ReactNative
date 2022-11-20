import { useRef, useState } from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterio] = useState<string | undefined>('0');
  const [numero, setNumero] = useState('0');

  const ultimaOperacion = useRef<Operadores>();

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterio(undefined);
  };

  const armarNumero = (numeroTexto: string) => {
    // no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') {
      return;
    }

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      if (numeroTexto === '.' || numero.includes('.')) {
        setNumero(numero + numeroTexto);
      } else {
        setNumero(numeroTexto);
      }
      return;
    }

    // concatenar todos los demas inputs
    setNumero((prev) => prev + numeroTexto);
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero((prev) => prev.replace('-', ''));
    } else {
      setNumero((prev) => '-' + prev);
    }
  };

  const eliminarUltimo = () => {
    if (numero.length === 1) {
      return setNumero('0');
    }

    if (numero.includes('-') && numero.length === 2) {
      return setNumero('0');
    }

    setNumero((prev) => prev.substring(0, prev.length - 1));
  };

  const cambiarNumeroPorAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterio(numero.slice(0, -1));
    } else {
      setNumeroAnterio(numero);
    }

    setNumero('0');
  };

  const botonDividir = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.dividir;
  };

  const botonMultiplicar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar;
  };

  const botonRestar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.restar;
  };

  const botonSumar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.sumar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    if (!numeroAnterior) {
      return;
    }

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(
          `${(num2 + num1) % 1 === 0 ? num2 + num1 : (num2 + num1).toFixed(2)}`,
        );
        break;
      case Operadores.restar:
        setNumero(
          `${(num2 - num1) % 1 === 0 ? num2 - num1 : (num2 - num1).toFixed(2)}`,
        );
        break;
      case Operadores.multiplicar:
        setNumero(
          `${(num2 * num1) % 1 === 0 ? num2 * num1 : (num2 * num1).toFixed(2)}`,
        );
        break;
      case Operadores.dividir:
        if (num1 === 0 && num2 === 0) {
          setNumero('0');
        } else {
          setNumero(
            `${
              (num2 / num1) % 1 === 0 ? num2 / num1 : (num2 / num1).toFixed(2)
            }`,
          );
        }
        break;
      default:
    }

    setNumeroAnterio(undefined);
  };

  return {
    // getters
    numero,
    numeroAnterior,

    // methods
    limpiar,
    armarNumero,
    positivoNegativo,
    eliminarUltimo,
    botonDividir,
    botonMultiplicar,
    botonRestar,
    botonSumar,
    calcular,
  };
};
