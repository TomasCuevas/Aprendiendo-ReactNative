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

//* tabs navigator *//
import { Tabs } from './Tabs';

//* drawer *//
const Drawer = createDrawerNavigator();

//* styles *//
import { colores, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const MenuLateral = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <MenuInterno {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
        headerTitle: '',
        headerStyle: {
          elevation: 0,
        },
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
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
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon
            name="airplane-outline"
            color={colores.primary}
            size={30}
            style={{ marginRight: 10 }}
          />
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.menuBoton,
            flexDirection: 'row',
          }}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Icon
            name="settings-outline"
            color={colores.primary}
            size={30}
            style={{ marginRight: 10 }}
          />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
