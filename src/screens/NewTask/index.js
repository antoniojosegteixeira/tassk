import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { database } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import styles from "./style";
import { FontAwesome } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function NewTask() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = () => {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formCell}>
        <Text style={styles.text}>Horário</Text>
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={(e, selectedTime) => setTime(selectedTime)}
          themeVariant="dark"
        />
      </View>

      <View style={styles.formDateCell}>
        <Text style={styles.dateText}>Data</Text>
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={(e, selectedDate) => setDate(selectedDate)}
          dateFormat="dayofweek day month"
          themeVariant="dark"
        />
      </View>

      <View style={styles.formCell}>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.input}
          onChangeText={(title) => setTitle(title)}
          value={title}
        ></TextInput>
      </View>
      <View style={styles.formCell}>
        <Text style={styles.text}>Descrição</Text>
        <View style={styles.textAreaContainer}>
          <TextInput
            style={styles.textArea}
            multiline={true}
            numberOfLines={3}
            value={description}
            onChangeText={(description) => setDescription(description)}
          ></TextInput>
        </View>
      </View>
      <TouchableOpacity style={styles.createButton} onPress={onSubmit}>
        <Text style={styles.createButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
