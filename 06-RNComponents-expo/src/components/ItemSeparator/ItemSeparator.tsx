import { useContext } from "react";
import { View } from "react-native";

//* CONTEXT *//
import { ThemeContext } from "../../context";

export const ItemSeparator = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={{
        borderBottomColor: colors.border,
        opacity: 0.2,
        borderBottomWidth: 1,
        marginVertical: 3,
      }}
    />
  );
};
