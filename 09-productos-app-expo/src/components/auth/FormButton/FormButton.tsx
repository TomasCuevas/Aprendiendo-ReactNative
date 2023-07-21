import { Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

//* THEME STYLES *//
import { authStyles } from "../../../theme";

//* INTERFACES *//
interface Props {
  text: string;
  onPress: any;
  style?: StyleProp<ViewStyle>;
}

interface FormButtonsVariants {
  Primary: React.FC<Props>;
  Secondary: React.FC<Props>;
}

export const FormButton: FormButtonsVariants = {
  Primary: ({ text, onPress, style }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ ...authStyles.button, ...(style as any) }}
      onPress={onPress}
    >
      <Text style={authStyles.button__text}>{text}</Text>
    </TouchableOpacity>
  ),
  Secondary: ({ text, onPress }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={authStyles.button__secondary}
      onPress={onPress}
    >
      <Text style={authStyles.button__text_secondary}>{text}</Text>
    </TouchableOpacity>
  ),
};
