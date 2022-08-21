import {
  View,
  Text,
  TextInput,
  Button,
  TextInputAndroidProps,
  Alert,
  StyleSheet,
  Pressable,
} from "react-native";
import { FC, useContext, useState, useRef } from "react";
import { TodosContext } from "../store/todo-context";

const NewTodo: FC = () => {
  const todosCtx = useContext(TodosContext);
  const [text, setText] = useState("");

  function textChangeHandler(value: string) {
    setText(value);
  }

  function submitHandler(): void {
    if (text.length < 2) {
      Alert.alert("Error", "Insert a valid todo");
      return;
    } else {
      todosCtx.addTodo(text);
      setText("");
    }
  }

  return (
    <View>
      <Text>Todo Text</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={textChangeHandler}
      />
      <Pressable style={styles.btn} onPress={submitHandler}>
        <Text>ADD TODO</Text>
      </Pressable>
    </View>
  );
};

export default NewTodo;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#f7f5ef",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginBottom: 8,
  },
  btn: {
    alignItems: 'center',
    backgroundColor: '#ebb002',
    padding: 8,
    borderRadius: 4
  },
});
