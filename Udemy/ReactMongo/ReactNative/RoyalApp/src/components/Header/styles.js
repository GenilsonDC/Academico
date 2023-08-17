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
    width: 65,
    height: 65,
    alignSelf: "center",
    bottom: -5,
  },
  notification: {
    position: "absolute",
    right: 10,
  },
  bellImageNotification: {
    width: 32,
    height: 37,
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
    left: 9,
  },
});
export default styles;
