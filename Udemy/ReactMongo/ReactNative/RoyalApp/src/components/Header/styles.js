import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    backgroundColor: "#708090",
    borderBottomWidth: 4,
    borderBlockColor: "#FF4500",
    alignItems: "stretch",
    justifyContent: "flex-end",
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  notification: {
    position: "absolute",
    right: 15,
  },
  bellImageNotification: {
    width: 25,
    height: 30,
    bottom: 10,
  },
  numbersNotification: {
    fontWeight: "900",
    color: "#FF4500",
  },
  circleNotification: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: 22,
    height: 22,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 14,
    bottom: 23,
  },
  leftIcons: {
    position: "absolute",
  },
  leftIconsImage: {
    width: 40,
    height: 40,
    bottom: 10,
    left: 3,
  },
});
export default styles;
