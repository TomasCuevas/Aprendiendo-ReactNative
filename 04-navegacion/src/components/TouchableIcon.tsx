import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//* context *//
import { AuthContext } from '../context/AuthContext';

//* styles *//
import { colores } from '../theme/appTheme';

//* interface *//
interface Props {
  iconName: string;
}

export const TouchableIcon: React.FC<Props> = ({ iconName }) => {
  const { onChangeFavIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => onChangeFavIcon(iconName)}>
      <Icon name={iconName} color={colores.primary} size={55} />
    </TouchableOpacity>
  );
};
