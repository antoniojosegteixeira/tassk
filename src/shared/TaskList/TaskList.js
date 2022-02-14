import React from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

export default function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <TouchableOpacity onPress={() => console.log("press")} key={task._id}>
            <LinearGradient colors={["#22293a", "#283040"]} style={styles.item}>
              <Text style={styles.itemText}>{task.title}</Text>
              <Text style={styles.time}>9:00</Text>
            </LinearGradient>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
