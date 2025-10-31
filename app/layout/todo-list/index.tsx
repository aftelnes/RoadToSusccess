import { FlatList, StyleSheet, View } from "react-native";

import { ITodo } from "@/app/types/todo";

import { Todo } from "../todo";

type Props = {
  list: ITodo[];
  deleteTodo: (id: string) => void;
  setCheckToDo: (id: string) => void;
};

export const TodoList = ({ list, deleteTodo, setCheckToDo }: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={styles.base}
        data={list}
        contentContainerStyle={{ paddingBottom: 15, paddingTop: 5 }}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => (
          <Todo
            todo={item}
            deleteTodo={deleteTodo}
            setCheckToDo={setCheckToDo}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
