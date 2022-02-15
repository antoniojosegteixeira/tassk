import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { database } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function NewTask() {
  return (
    <View style={styles.container}>
      <View style={styles.formCell}>
        <Text style={styles.text}>Nome</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.formCell}>
        <Text style={styles.text}>Horário</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.formCell}>
        <Text style={styles.text}>Descrição</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={3}
          ></TextInput>
        </View>
      </View>
    </View>
  );
}
