import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import React, { FC, useContext } from "react";
import { TodosContext } from "../store/todo-context";

const Todos: FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <View>
      <FlatList
        data={todosCtx.items.reverse()}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => {
          return (
            <Pressable
              style={styles.itemContainer}
              android_ripple={{ color: "grey" }}
              onPress={() => todosCtx.removeTodo(itemData.item.id)}
            >
              <Text style={styles.text}>{itemData.item.text}</Text>
              <Text style={styles.id}>date: {itemData.item.id.substring(0,10)}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 16,
    backgroundColor: '#f7f5ef',
    borderRadius: 8,
  },
  text: {
    textAlign: 'center'
  },
  id: {
    paddingLeft: 10,
    fontSize: 8,
  }
});
