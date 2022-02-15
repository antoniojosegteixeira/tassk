import { StyleSheet } from "react-native";
import colors from "../../colors/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  formCell: {
    marginBottom: 20,
  },
  formDateCell: {
    marginBottom: 30,
    justifyContent: "center",
  },
  dateText: {
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontSize: 18,
    opacity: 0.7,
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
  textAreaContainer: {
    height: 80,
    justifyContent: "flex-start",
  },
  textArea: {
    textAlignVertical: "top",
    height: "100%",
    fontSize: 22,
    color: "white",
    borderBottomColor: "#ffffffba",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  createButton: {
    paddingVertical: 15,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 60,
  },
  createButtonText: {
    fontSize: 18,
  },
});

export default styles;
