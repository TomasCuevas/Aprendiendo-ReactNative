import {
  useWindowDimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

//* screens *//
import { SettingsScreen } from '../screens/SettingsScreen';

//* stack navigator *//
import { StackNavigator } from './StackNavigator';
import { styles } from '../theme/appTheme';

//* drawer *//
const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

interface Props extends DrawerContentComponentProps {}

const MenuInterno: React.FC<Props> = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
          }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBoton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
