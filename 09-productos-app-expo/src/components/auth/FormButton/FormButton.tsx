import { Text, TouchableOpacity } from "react-native";

//* THEME *//
import { authStyles } from "../../../theme";

//* INTERFACES *//
interface Props {
  text: string;
  onPress: any;
}

interface FormButtonsVariants {
  Primary: React.FC<Props>;
  Secondary: React.FC<Props>;
}

export const FormButton: FormButtonsVariants = {
  Primary: ({ text, onPress }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={authStyles.button}
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
