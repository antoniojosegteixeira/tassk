import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "./src/screens/Task";
import NewTask from "./src/screens/NewTask";
import Details from "./src/screens/Details";
import Header from "./src/shared/Header/Header";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
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

const newTaskOptions = {
  headerStyle: {
    shadowColor: "transparent",
    backgroundColor: colors.darkBlue,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const authOptions = {
  headerStyle: {
    shadowColor: "transparent",
    backgroundColor: colors.darkBlue,
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const Stack = createStackNavigator();

const LoggedRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cronograma">
        <Stack.Screen
          name="Cronograma"
          component={Task}
          options={homeOptions}
        />
        <Stack.Screen
          name="Nova Tarefa"
          component={NewTask}
          options={newTaskOptions}
        />
        <Stack.Screen name="Detalhes" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const UnloggedRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registrar">
        <Stack.Screen name="Login" component={Login} options={authOptions} />
        <Stack.Screen
          name="Registrar"
          component={Register}
          options={authOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  return <UnloggedRoutes />;
};

export default function App() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
