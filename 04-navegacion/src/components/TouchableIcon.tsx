import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//* styles *//
import { colores } from '../theme/appTheme';

interface Props {
  iconName: string;
}

export const TouchableIcon: React.FC<Props> = ({ iconName }) => {
  return (
    <TouchableOpacity onPress={() => console.log(iconName)}>
      <Icon name={iconName} color={colores.primary} size={55} />
    </TouchableOpacity>
  );
};
