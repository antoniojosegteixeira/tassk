import React from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";

export default function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <TouchableOpacity
            onPress={() => console.log("press")}
            style={styles.item}
            key={task._id}
          >
            <Text style={styles.itemText}>{task.title}</Text>
            <Text style={styles.time}>9:00</Text>
          </TouchableOpacity>
        );
      })}
    </>
  );
}
