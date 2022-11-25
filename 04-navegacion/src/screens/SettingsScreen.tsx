import { useContext } from 'react';
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

//* context *//
import { AuthContext } from '../context/AuthContext';

//* styles *//
import { colores, styles } from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();
  const { authState } = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top,
      }}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon ? (
        <Icon
          name={authState.favoriteIcon}
          size={150}
          color={colores.primary}
        />
      ) : null}
    </View>
  );
};
