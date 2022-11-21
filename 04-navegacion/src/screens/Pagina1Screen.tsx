import { Text, View, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

//* styles *//
import { styles } from '../theme/appTheme';

//* interfaces *//
interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina1Screen</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
    </View>
  );
};
