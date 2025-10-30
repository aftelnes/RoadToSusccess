import { ITodo } from "@/app/types/todo";
import { FlatList, View, StyleSheet } from "react-native";
import { Todo } from "../todo";

type Props = {
  list: ITodo[];
  deleteTodo: (id: string) => void;
};

export const TodoList = ({ list, deleteTodo }: Props) => {
  return (
    <View>
      <FlatList
        style={styles.base}
        data={list}
        keyExtractor={(todo) => todo.id.toString()}
        renderItem={({ item }) => <Todo todo={item} deleteTodo={deleteTodo} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});
