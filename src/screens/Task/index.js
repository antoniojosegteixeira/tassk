import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { database } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function Task() {
  const [tasks, setTasks] = useState([]);

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

      setTasks([...tasks, list]);
    });

    return () => unsubscribe();
  }, []);

  console.log(tasks);

  return (
    <View>
      <Text>Task</Text>
    </View>
  );
}
