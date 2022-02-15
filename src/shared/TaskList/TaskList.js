import React from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";

export default function TaskList({ tasks }) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <LinearGradient
            colors={["#22293a", "#283040"]}
            style={styles.item}
            key={task._id}
          >
            <TouchableOpacity
              onPress={() => console.log("press")}
              style={styles.itemContainer}
            >
              <View style={styles.taskIcon}>
                <FontAwesome name="calendar" size={20} color="#fff" />
              </View>
              <View style={styles.text}>
                <Text style={styles.title}>{task.title}</Text>
                <Text style={styles.time}>9:00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log("press")}
              style={styles.ellipsis}
            >
              <FontAwesome name="ellipsis-v" size={20} color="#fff" />
            </TouchableOpacity>
          </LinearGradient>
        );
      })}
    </>
  );
}
