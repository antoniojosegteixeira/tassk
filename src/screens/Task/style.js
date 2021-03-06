import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingTop: 20,
  },
  main: {
    paddingHorizontal: 20,
  },
  greeting: {
    fontSize: 30,
    color: "white",
  },
  greetingSub: {
    fontSize: 18,
    color: "white",
    opacity: 0.7,
    paddingTop: 3,
  },
  footer: {
    backgroundColor: colors.mediumBlue,
    height: 75,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
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
    bottom: 40,
  },
  footerNavButton: {
    width: 60,
    height: 60,
  },
  footerNavContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 25,
    width: "70%",
    maxWidth: 250,
  },
});

export default styles;
