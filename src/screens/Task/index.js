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

export default function Task({ navigation }) {
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

      setTasks(list);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Index</Text>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#b7c1d1"
          onPress={() => console.log("press")}
          style={styles.addButton}
        >
          <FontAwesome name="plus" size={32} color="#2F394B" />
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
