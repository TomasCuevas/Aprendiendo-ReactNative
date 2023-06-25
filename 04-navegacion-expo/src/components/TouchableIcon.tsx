import { useContext } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";

//* THEME COLORS *//
import { colors } from "../theme";

//* CONTEXT *//
import { AuthContext } from "../context/AuthContext";

//* INTERFACE *//
interface Props {
  iconName: any;
}

export const TouchableIcon: React.FC<Props> = ({ iconName }) => {
  const { changeFavoriteIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
      <Icon name={iconName} size={60} color={colors.primary} />
    </TouchableOpacity>
  );
};
