import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { database } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

import TaskList from "../../shared/TaskList/TaskList";

export default function Task({ navigation }) {
  const [tasks, setTasks] = useState([
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
  ]);

  useEffect(() => {
    const taskCollection = collection(database, "tasks");
    const unsubscribe = onSnapshot(taskCollection, (snapshot) => {
      const list = [];
      snapshot.forEach((doc) => {
        list.push({
          _id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
        });
      });

      setTasks(list);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.greeting}>Olá, User</Text>
        <Text style={styles.greetingSub}>Bom dia</Text>
      </View>
      <ScrollView style={styles.main}>
        <TaskList tasks={tasks} />
      </ScrollView>
      <View style={styles.footer}>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#b7c1d1"
          onPress={() => console.log("press")}
          style={styles.addButton}
        >
          <FontAwesome name="plus" size={30} color="#2F394B" />
        </TouchableHighlight>
        <View style={styles.footerNavContainer}>
          <View>
            <TouchableOpacity onPress={() => console.log("press")}>
              <FontAwesome name="home" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => console.log("press")}>
              <FontAwesome name="user" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
