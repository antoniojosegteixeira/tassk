import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { database } from "../../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";

export default function NewTask() {
  return (
    <View>
      <Text>New Task</Text>
    </View>
  );
}
