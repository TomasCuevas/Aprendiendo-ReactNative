import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//* styles *//
import { styles, colores } from '../theme/appTheme';

export const IconsScreen = () => {
  return (
    <View
      style={{
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      }}>
      <Text style={styles.title}>Iconos</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Icon name="rocket" color={colores.primary} size={55} />
        <Icon name="airplane-outline" color={colores.primary} size={55} />
        <Icon name="aperture-outline" color={colores.primary} size={55} />
        <Icon name="bookmarks-outline" color={colores.primary} size={55} />
        <Icon name="chevron-back-outline" color={colores.primary} size={55} />
        <Icon
          name="chevron-forward-outline"
          color={colores.primary}
          size={55}
        />
        <Icon name="eye-outline" color={colores.primary} size={60} />
        <Icon name="eyedrop-outline" color={colores.primary} size={60} />
        <Icon name="leaf-outline" color={colores.primary} size={60} />
        <Icon
          name="game-controller-outline"
          color={colores.primary}
          size={60}
        />
      </View>
    </View>
  );
};
