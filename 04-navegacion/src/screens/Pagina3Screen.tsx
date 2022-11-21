import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';

//* styles *//
import { styles } from '../theme/appTheme';

//* interfaces *//
interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
