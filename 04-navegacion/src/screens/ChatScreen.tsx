import { View, Text } from 'react-native';

//* styles *//
import { styles } from '../theme/appTheme';

export const ChatScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Chat Screen</Text>
    </View>
  );
};
