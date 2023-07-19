import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "700",
    marginTop: 50,
  },
  label: {
    marginTop: 25,
    color: "#FFF",
    fontWeight: "700",
    fontSize: 18,
  },
  inputField: {
    color: "#FFF",
    fontSize: 16,
    paddingBottom: 4,
    borderBottomColor: "#FFF",
    borderBottomWidth: 1,
  },
  button: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "#FFF",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  button__text: {
    fontSize: 18,
    color: "#5858D6",
  },
  button__secondary: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFF",
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  button__text_secondary: {
    fontSize: 18,
    color: "#FFF",
  },
  buttons__container: {
    marginTop: 30,
    gap: 10,
  },
});
