import { StatusBar } from "expo-status-bar";
import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import TodoContextProvider, { TodosContext } from "./store/todo-context";

export default function App() {
  return (
    <TodoContextProvider>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View>
          <NewTodo />
        </View>
        <View>
          <Todos />
        </View>
      </View>
    </TodoContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    marginTop: 24,
    marginHorizontal: 26,
  },
});
