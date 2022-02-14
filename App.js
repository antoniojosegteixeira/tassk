import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "./src/screens/Task";
import NewTask from "./src/screens/NewTask";
import Details from "./src/screens/Details";
import Header from "./src/shared/Header/Header";
import colors from "./src/colors/colors";

const homeOptions = {
  headerTitle: () => <Header />,
  headerStyle: {
    backgroundColor: colors.darkBlue,
    shadowColor: "transparent",
  },
  headerTintColor: colors.darkBlue,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task" screenOptions={homeOptions}>
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="NewTask" component={NewTask} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
