import { ChangeEvent } from "react";
import { Text, TextInput, KeyboardTypeOptions } from "react-native";

//* THEME STYLES *//
import { authStyles } from "../../../theme";

//* INTERFACE *//
interface Props {
  label: string;
  placelholder: string;
  value: string;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText(e: string | ChangeEvent<any>): void;
}

export const FormInput: React.FC<Props> = ({
  keyboardType,
  label,
  placelholder,
  value,
  isPassword = false,
  onChangeText,
}) => {
  return (
    <>
      <Text style={authStyles.label}>{label}</Text>
      <TextInput
        placeholder={placelholder}
        placeholderTextColor="#FFF5"
        keyboardType={keyboardType}
        style={authStyles.inputField}
        secureTextEntry={isPassword}
        selectionColor="#FFF4"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        value={value}
      />
    </>
  );
};
