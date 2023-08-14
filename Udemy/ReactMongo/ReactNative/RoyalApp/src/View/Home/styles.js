import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  filters: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  filterActived: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#FF4500",
  },
  filterDesactived: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#B0C4DE",
    opacity: 0.5,
  },
  content: {
    width: "100%",
    marginTop: 30,
  },
  title: {
    width: "100%",
    borderBottomWidth: 4,
    borderRadius: "50%",
    borderColor: "#708090",
    alignItems: "center",
  },
  titleText: {
    color: "#778899",
    fontSize: 18,
    fontWeight: "bold",
    position: "relative",
    top: 11,
    backgroundColor: "#FFFAFA",
    paddingHorizontal: 5,
  },
});
export default styles;
