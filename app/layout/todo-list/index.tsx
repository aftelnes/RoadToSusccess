import { ITodo } from "@/app/types/todo";
import { FlatList, StyleSheet, View } from "react-native";
import { Todo } from "../todo";

type Props = {
  list: ITodo[];
  deleteTodo: (id: string) => void;
  setCheckToDo: (id: string) => void;
};

export const TodoList = ({ list, deleteTodo, setCheckToDo }: Props) => {
  return (
    <View>
      <FlatList
        style={styles.base}
        data={list}
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
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});
