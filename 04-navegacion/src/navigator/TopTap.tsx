import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//* screens *//
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';

const TopTap = createMaterialTopTabNavigator();

export const TopTapNavigator = () => {
  return (
    <TopTap.Navigator>
      <TopTap.Screen name="ChatScreen" component={ChatScreen} />
      <TopTap.Screen name="ContactScreen" component={ContactScreen} />
      <TopTap.Screen name="AlbumsScreen" component={AlbumsScreen} />
    </TopTap.Navigator>
  );
};
