import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//* styles *//
import { colores } from '../theme/appTheme';

//* screens *//
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TopTap = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  return (
    <TopTap.Navigator
      screenOptions={({ route }) => ({
        tabBarPressColor: colores.primary,
        tabBarActiveTintColor: colores.primary,
        tabBarInactiveTintColor: 'black',
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarShowIcon: true,
        tabBarStyle: {
          elevation: 0,
          borderTopWidth: 0,
        },
        tabBarIcon: (props) => {
          let iconName: React.ReactNode = '';

          switch (route.name) {
            case 'Chat':
              iconName = (
                <Icon name="chatbox-outline" color={props.color} size={20} />
              );
              break;
            case 'Contact':
              iconName = (
                <Icon name="people-outline" color={props.color} size={20} />
              );
              break;
            case 'Albums':
              iconName = (
                <Icon name="grid-outline" color={props.color} size={20} />
              );
              break;
          }

          return <Text style={{ color: props.color }}>{iconName}</Text>;
        },
      })}
      sceneContainerStyle={{ backgroundColor: 'white' }}>
      <TopTap.Screen name="Chat" component={ChatScreen} />
      <TopTap.Screen name="Contact" component={ContactScreen} />
      <TopTap.Screen name="Albums" component={AlbumsScreen} />
    </TopTap.Navigator>
  );
};
