import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
  item: {
    borderRadius: 8,
    marginVertical: 5,
    justifyContent: "center",
  },
  itemContainer: {
    width: "100%",
    padding: 13,
    flexDirection: "row",
  },
  text: {
    marginLeft: 8,
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  time: {
    color: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  taskIcon: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  ellipsis: {
    position: "absolute",
    right: 0,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    width: 30,
    marginRight: 10,
  },
});

export default styles;
