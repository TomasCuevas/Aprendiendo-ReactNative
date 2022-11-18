import {Text, View} from 'react-native';
import {BotonCalc} from '../components/BotonCalc';

//* styles
import {styles} from '../theme/appTheme';

export const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeno}>1,500.00</Text>
      <Text style={styles.resultado}>1,500.00</Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color="#9b9b9b" />
        <BotonCalc text="+/-" color="#9b9b9b" />
        <BotonCalc text="del" color="#9b9b9b" />
        <BotonCalc text="/" color="#ff9427" />
      </View>
    </View>
  );
};
