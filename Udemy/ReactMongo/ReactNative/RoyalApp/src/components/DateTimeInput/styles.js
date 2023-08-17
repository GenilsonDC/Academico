import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
  },

  input: {
    color: "#FF4500",
    fontSize: 18,
    fontWeight: "bold",
    width: "100%",
    borderBottomWidth: 2,
    borderRadius: 25,
    borderColor: "#708090",
    padding: 22,
    margin: 20,
  },
  iconTextInput: {
    position: "absolute",
    resizeMode: "center",

    bottom: 15,
    right: 25,
    width: 25,
    height: 25,
  },
});
export default styles;
