import { ChangeEvent } from "react";
import { Text, TextInput, KeyboardTypeOptions } from "react-native";

//* THEME STYLES *//
import { authStyles } from "../../../theme";

//* INTERFACE *//
interface FormInputHocProps {
  label: string;
  placelholder: string;
  value: string;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText(e: string | ChangeEvent<any>): void;
  theme: "light" | "dark";
}

interface FormInputProps {
  label: string;
  placelholder: string;
  value: string;
  isPassword?: boolean;
  keyboardType?: KeyboardTypeOptions;
  onChangeText(e: string | ChangeEvent<any>): void;
}

type FormInputVariants = {
  Light: React.FC<FormInputProps>;
  Dark: React.FC<FormInputProps>;
};

export const FormInput: FormInputVariants = {
  Dark: (props) => <FormInputHoc {...props} theme="dark" />,
  Light: (props) => <FormInputHoc {...props} theme="light" />,
};

export const FormInputHoc: React.FC<FormInputHocProps> = ({
  keyboardType,
  label,
  onChangeText,
  placelholder,
  theme,
  value,
  isPassword = false,
}) => {
  return (
    <>
      <Text
        style={{
          ...authStyles.label,
          color: theme === "light" ? "#FFF" : "#000",
        }}
      >
        {label}
      </Text>
      <TextInput
        placeholder={placelholder}
        placeholderTextColor={theme === "light" ? "#FFF5" : "#000A"}
        keyboardType={keyboardType}
        style={{
          ...authStyles.inputField,
          color: theme === "light" ? "#FFF" : "#000",
          borderBottomColor: theme === "light" ? "#FFF" : "#000",
          paddingHorizontal: 15,
        }}
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
