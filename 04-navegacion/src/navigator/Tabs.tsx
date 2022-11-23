import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//* styles *//
import { colores } from '../theme/appTheme';

//* screens *//
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';

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
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: { borderTopWidth: 0, elevation: 0 },
        headerShown: false,
        tabBarLabelStyle: { fontSize: 15 },
        tabBarIcon: (props) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'TopTapNavigator':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
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
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
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
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'TopTapNavigator':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return <Text style={{ color: props.color }}>{iconName}</Text>;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTapNavigator"
        options={{ title: 'Tab2' }}
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
