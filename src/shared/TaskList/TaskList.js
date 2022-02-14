import React from "react";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import styles from "./styles";

const data = [
  {
    _id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    _id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    _id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item }) => (
  <TouchableOpacity onPress={() => console.log("press")} style={styles.item}>
    <Text style={styles.itemText}>{item.title}</Text>
    <Text style={styles.time}>9:00</Text>
  </TouchableOpacity>
);

export default function TaskList() {
  return (
    <FlatList data={data} renderItem={Item} keyExtractor={(item) => item._id} />
  );
}
