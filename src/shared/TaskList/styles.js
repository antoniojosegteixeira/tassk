import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: colors.mediumBlue,
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  itemText: {
    color: "white",
    fontSize: 18,
  },
  time: { color: "white" },
});

export default styles;
