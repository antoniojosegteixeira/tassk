import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: 20,
  },
  footer: {
    backgroundColor: colors.mediumBlue,
    height: 100,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  addButton: {
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    bottom: 60,
  },
});

export default styles;
