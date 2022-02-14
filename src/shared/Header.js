import React from "react";
import colors from "../colors/colors";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Header() {
  return (
    <View style={styles.header}>
      <View>
        <TouchableOpacity onPress={() => console.log("press")}>
          <FontAwesome name="bars" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>Cronograma</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => console.log("press")}>
          <FontAwesome name="cogs" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
