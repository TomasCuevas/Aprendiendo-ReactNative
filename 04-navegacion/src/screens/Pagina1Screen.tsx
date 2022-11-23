import { Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

//* styles *//
import { styles } from '../theme/appTheme';

//* interfaces *//
import { RootStackParams } from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'Pagina1Screen'> {}

export const Pagina1Screen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1</Text>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: '#0af',
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          flexDirection: 'row',
        }}
        onPress={() => navigation.navigate('Pagina2Screen')}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}>
          Ir a la siguiente pagina
        </Text>
        <Icon
          name="chevron-forward-outline"
          style={{ marginLeft: 10, color: 'white', top: 2 }}
          size={25}
        />
      </TouchableOpacity>

      <Text style={{ marginTop: 15 }}>Navegar con argumentos</Text>

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856d6',
            paddingVertical: 10,
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Icon name="body-outline" size={30} color="white" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#ff9427',
            paddingVertical: 10,
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Icon name="woman-outline" size={30} color="white" />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
