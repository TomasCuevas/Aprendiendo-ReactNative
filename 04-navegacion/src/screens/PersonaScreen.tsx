import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';

//* styles *//
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';

interface Props extends StackScreenProps<any, any> {}

export const PersonaScreen: React.FC<Props> = ({ route, navigation }) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};
