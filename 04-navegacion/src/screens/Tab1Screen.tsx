import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//* styles *//
import { styles, colores } from '../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <View style={{ flexDirection: 'row' }}>
        <Icon name="rocket" color={colores.primary} size={30} />
        <Icon name="airplane-outline" color={colores.primary} size={30} />
        <Icon name="aperture-outline" color={colores.primary} size={30} />
        <Icon name="bookmarks-outline" color={colores.primary} size={30} />
        <Icon name="chevron-back-outline" color={colores.primary} size={30} />
        <Icon
          name="chevron-forward-outline"
          color={colores.primary}
          size={30}
        />
        <Icon name="eye-outline" color={colores.primary} size={30} />
      </View>
    </View>
  );
};
