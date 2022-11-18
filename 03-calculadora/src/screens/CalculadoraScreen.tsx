import { useState } from 'react';
import { Text, View } from 'react-native';

//* components *//
import { BotonCalc } from '../components/BotonCalc';

//* styles
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterio] = useState<string | undefined>(
    '1,500.00',
  );
  const [numero, setNumero] = useState('100');

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterio(undefined);
  };

  const armarNumero = (numeroTexto: string) => {
    setNumero(prev => prev + numeroTexto);
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
        <BotonCalc text="+/-" color="#9b9b9b" />
        <BotonCalc text="del" color="#9b9b9b" />
        <BotonCalc text="/" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" accion={() => armarNumero('7')} />
        <BotonCalc text="8" accion={() => armarNumero('8')} />
        <BotonCalc text="9" accion={() => armarNumero('9')} />
        <BotonCalc text="X" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" accion={() => armarNumero('4')} />
        <BotonCalc text="5" accion={() => armarNumero('5')} />
        <BotonCalc text="6" accion={() => armarNumero('6')} />
        <BotonCalc text="-" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" accion={() => armarNumero('1')} />
        <BotonCalc text="2" accion={() => armarNumero('2')} />
        <BotonCalc text="3" accion={() => armarNumero('3')} />
        <BotonCalc text="+" color="#ff9427" />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" accion={() => armarNumero('0')} ancho />
        <BotonCalc text="." accion={() => armarNumero('.')} />
        <BotonCalc text="=" color="#ff9427" />
      </View>
    </View>
  );
};
