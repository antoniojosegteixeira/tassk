import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.darkBlue,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  title: {
    color: "white",
    fontSize: 19,
  },
});

export default styles;
