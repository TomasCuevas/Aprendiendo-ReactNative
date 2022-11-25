import { useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

//* styles *//
import { styles } from '../theme/appTheme';

//* context *//
import { AuthContext } from '../context/AuthContext';

//* interfaces *//
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen: React.FC<Props> = ({ route, navigation }) => {
  const { onChangeUsername } = useContext(AuthContext);
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    onChangeUsername(params.nombre);
  }, [params.nombre]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{JSON.stringify(params, null, 2)}</Text>
    </View>
  );
};
