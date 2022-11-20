import { useRef, useState } from 'react';
import { Text, View } from 'react-native';

//* components *//
import { BotonCalc } from '../components/BotonCalc';

//* styles
import { styles } from '../theme/appTheme';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterio] = useState<string | undefined>(
    '1,500.00',
  );
  const [numero, setNumero] = useState('100');

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

    switch (ultimaOperacion.current) {
      case Operadores.sumar:
        setNumero(`${(num2 + num1).toFixed(2)}`);
        break;
      case Operadores.restar:
        setNumero(`${(num2 - num1).toFixed(2)}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${(num2 * num1).toFixed(2)}`);
        break;
      case Operadores.dividir:
        if (num1 === 0 && num2 === 0) {
          setNumero('0');
        } else {
          setNumero(`${(num2 / num1).toFixed(2)}`);
        }
        break;
      default:
    }

    setNumeroAnterio(undefined);
  };

  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>
        {numeroAnterior ? numeroAnterior : null}
      </Text>
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numero}
      </Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9b9b9b" accion={limpiar} />
        <BotonCalc text="+/-" color="#9b9b9b" accion={positivoNegativo} />
        <BotonCalc text="del" color="#9b9b9b" accion={eliminarUltimo} />
        <BotonCalc text="/" color="#ff9427" accion={botonDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" accion={() => armarNumero('7')} />
        <BotonCalc text="8" accion={() => armarNumero('8')} />
        <BotonCalc text="9" accion={() => armarNumero('9')} />
        <BotonCalc text="X" color="#ff9427" accion={botonMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" accion={() => armarNumero('4')} />
        <BotonCalc text="5" accion={() => armarNumero('5')} />
        <BotonCalc text="6" accion={() => armarNumero('6')} />
        <BotonCalc text="-" color="#ff9427" accion={botonRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" accion={() => armarNumero('1')} />
        <BotonCalc text="2" accion={() => armarNumero('2')} />
        <BotonCalc text="3" accion={() => armarNumero('3')} />
        <BotonCalc text="+" color="#ff9427" accion={botonSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" accion={() => armarNumero('0')} ancho />
        <BotonCalc text="." accion={() => armarNumero('.')} />
        <BotonCalc text="=" color="#ff9427" accion={calcular} />
      </View>
    </View>
  );
};
