import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//* screens *//
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';

//* stack navigator *//
import { StackNavigator } from './StackNavigator';
import { colores, styles } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: { borderTopWidth: 0, elevation: 0 },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Tab1Screen"
        options={{ title: 'Tab1' }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{ title: 'Tab2' }}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{ title: 'Stack' }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
