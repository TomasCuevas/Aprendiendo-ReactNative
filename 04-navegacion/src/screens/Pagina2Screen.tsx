import { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//* styles *//
import { styles } from '../theme/appTheme';

//* interfaces *//
interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ title: 'Hola Mundo', headerBackTitle: 'Atras' });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 2</Text>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#0af',
          height: 40,
          justifyContent: 'space-between',
          paddingHorizontal: '10%',
          alignItems: 'center',
          borderRadius: 20,
          flexDirection: 'row',
          marginVertical: 5,
        }}
        onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-back-outline"
          style={{ marginLeft: 10, color: 'white', top: 1 }}
          size={30}
        />
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>
          Ir a la pagina anterior
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#0af',
          height: 40,
          justifyContent: 'space-between',
          paddingHorizontal: '10%',
          alignItems: 'center',
          borderRadius: 20,
          flexDirection: 'row',
          marginVertical: 5,
        }}
        onPress={() => navigation.navigate('Pagina3Screen')}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>
          Ir a la siguiente pagina
        </Text>
        <Icon
          name="chevron-forward-outline"
          style={{ marginLeft: 10, color: 'white', top: 2 }}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};
