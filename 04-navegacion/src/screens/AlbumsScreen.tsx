import { useContext } from 'react';
import { View, Text, Button } from 'react-native';

//* context *//
import { AuthContext } from '../context/AuthContext';

//* styles *//
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {
  const { onLogout, authState } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums Screen</Text>
      {authState.isLoggin ? <Button onPress={onLogout} title="Logout" /> : null}
    </View>
  );
};
