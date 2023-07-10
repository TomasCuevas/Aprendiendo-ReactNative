import { View, Text, StyleSheet, TextInput } from "react-native";

//* ICONS *//
import Icon from "@expo/vector-icons/Ionicons";

//* INTERFACE *//
interface Props {}

export const SearchInput: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text__background}>
        <TextInput
          placeholder="Buscar Pokémon"
          style={styles.text__input}
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
        />

        <Icon name="search-outline" color="grey" size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text__background: {
    backgroundColor: "#F3F1F3",
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  text__input: {
    flex: 1,
    fontSize: 16,
  },
});