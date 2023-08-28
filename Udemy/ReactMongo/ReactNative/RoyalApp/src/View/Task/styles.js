import { ImageBackground, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: "#f1a",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  gradeIcons: {
    width: 45,
    height: 45,
    margin: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  label: {
    color: "#FF4500",
    fontSize: 20,
    fontWeight: "700",
    paddingHorizontal: 12,
    marginTop: 19,
    marginBottom: 2,
  },
  input: {
    width: "90%",
    fontSize: 18,
    padding: 2,
    fontWeight: "500",
    color: "#191970",
    alignSelf: "center",
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: "#708090",
  },
  inputArea: {
    width: "90%",
    height: 250,
    fontSize: 18,
    fontWeight: "500",
    color: "#191970",
    textAlignVertical: "top",
    padding: 9,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 12,
    borderColor: "#708090",
  },
  inLine: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  switchLabel: {
    fontWeight: "700",
    color: "#FF4500",
    textTransform: "uppercase",
    fontSize: 18,
    paddingLeft: 9,
  },
  switchButton: {
    marginLeft: 19,
  },
  removeLabel: {
    fontWeight: "700",
    color: "#708090",
    textTransform: "uppercase",
    fontSize: 18,
    paddingRight: 29,
  },
});

export default styles;
