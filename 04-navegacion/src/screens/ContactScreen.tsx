import { useContext } from 'react';
import { View, Text, Button } from 'react-native';

//* context *//
import { AuthContext } from '../context/AuthContext';

//* styles *//
import { styles } from '../theme/appTheme';

export const ContactScreen = () => {
  const { onSignIn, authState } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contact Screen</Text>
      {authState.isLoggin ? null : <Button title="SignIn" onPress={onSignIn} />}
    </View>
  );
};
