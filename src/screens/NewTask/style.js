import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
    padding: 20,
  },
  formCell: {
    marginBottom: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    opacity: 0.7,
  },
  input: {
    borderBottomColor: "#ffffffba",
    borderBottomWidth: 1,
    paddingVertical: 10,
    fontSize: 22,
    color: "white",
  },
});

export default styles;
