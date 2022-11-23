import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//* styles *//
import { colores } from '../theme/appTheme';

//* screens *//
import { IconsScreen } from '../screens/IconsScreen';

//* stack navigator *//
import { StackNavigator } from './StackNavigator';

//* top tap navigator *//
import { TopTapNavigator } from './TopTap';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

//* IOS *//
//* IOS *//
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: { borderTopWidth: 0, elevation: 0 },
        headerShown: false,
        tabBarLabelStyle: { fontSize: 15 },
        tabBarIcon: (props) => {
          let iconName: React.ReactNode = '';

          switch (route.name) {
            case 'IconsScreen':
              iconName = (
                <Icon name="caret-up-circle-outline" size={20} color="white" />
              );
              break;
            case 'TopTapNavigator':
              iconName = <Icon name="send-outline" size={20} color="white" />;
              break;
            case 'StackNavigator':
              iconName = <Icon name="layers-outline" size={20} color="white" />;
              break;
          }
          return (
            <Text style={{ color: props.color, fontSize: props.size }}>
              {iconName}
            </Text>
          );
        },
      })}>
      <BottomTabIOS.Screen
        name="IconsScreen"
        options={{
          title: 'Tab1',
        }}
        component={IconsScreen}
      />
      <BottomTabIOS.Screen
        name="TopTapNavigator"
        options={{ title: 'Tab2' }}
        component={TopTapNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

//* ANDROID *//
//* ANDROID *//
const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => {
          let iconName: React.ReactNode = '';

          switch (route.name) {
            case 'IconsScreen':
              iconName = (
                <Icon name="caret-up-circle-outline" size={20} color="white" />
              );
              break;
            case 'TopTapNavigator':
              iconName = <Icon name="send-outline" size={20} color="white" />;
              break;
            case 'StackNavigator':
              iconName = <Icon name="layers-outline" size={20} color="white" />;
              break;
          }
          return <Text style={{ color: props.color }}>{iconName}</Text>;
        },
      })}>
      <BottomTabAndroid.Screen
        name="IconsScreen"
        options={{
          title: 'Iconos',
        }}
        component={IconsScreen}
      />
      <BottomTabAndroid.Screen
        name="TopTapNavigator"
        options={{ title: 'TopTap' }}
        component={TopTapNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};
