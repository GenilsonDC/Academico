import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  cards: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 10,
    width: "90%",
    height: 90,
    backgroundColor: "#778899",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 7,
  },
  leftCards: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardActivide: {
    width: 50,
    height: 50,
  },
  cardTitle: {
    color: "#fff",
    marginLeft: 7,
    fontWeight: "800",
    fontSize: 14,
  },
  rightCards: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  cardDate: {
    color: "#FF8C00",
    marginLeft: 7,
    fontWeight: "800",
    fontSize: 15,
    position: "absolute",
    bottom: 53,
  },
  cardTime: {
    color: "#FFA500",
    marginLeft: 7,
    fontWeight: "800",
    fontSize: 15,
    position: "absolute",
    bottom: -5,
  },
  done: {
    opacity: 0.2,
    backgroundColor: "#A9A9A9",
  },
});
export default styles;
