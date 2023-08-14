import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 70,
    backgroundColor: "#708090",
    borderTopWidth: 4,
    borderBlockColor: "#FF4500",
    alignItems: "center",
  },
  button: {
    position: "absolute",
    bottom: 40,
  },
  buttonImage: {
    width: 60,
    height: 60,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    top: 32,
  },
});
export default styles;
