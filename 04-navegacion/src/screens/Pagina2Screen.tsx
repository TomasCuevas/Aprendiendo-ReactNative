import { StackScreenProps } from '@react-navigation/stack';
import { Text, View, Button } from 'react-native';

//* styles *//
import { styles } from '../theme/appTheme';

//* interfaces *//
interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text>Pagina2Screen</Text>
      <Button
        title="Ir pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
