import { View, Text } from 'react-native';

//* styles *//
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

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
        <TouchableIcon iconName="rocket" />
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="aperture-outline" />
        <TouchableIcon iconName="bookmarks-outline" />
        <TouchableIcon iconName="chevron-back-outline" />
        <TouchableIcon iconName="chevron-forward-outline" />
        <TouchableIcon iconName="eye-outline" />
        <TouchableIcon iconName="eyedrop-outline" />
        <TouchableIcon iconName="leaf-outline" />
        <TouchableIcon iconName="game-controller-outline" />
      </View>
    </View>
  );
};
