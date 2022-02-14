import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

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
