import { StyleSheet, View } from "react-native";

import { StyledText } from "@/app/components/styled-text";
import { ITodo } from "@/app/types/todo";
import { STYLES } from "@/app/consts";
import { StyledButton } from "@/app/components/styled-button";
import { StyledCheckBox } from "@/app/components/styled-check-box";

type Props = {
  todo: ITodo;
  deleteTodo: (id: string) => void;
};

export const Todo = ({ todo, deleteTodo }: Props) => {
  return (
    <View
      style={[styles.container, todo.isCompleted && styles.completedContainer]}
    >
      <View style={styles.checkTitleContainer}>
        <StyledCheckBox checked={todo.isCompleted} onCheck={() => {}} />
        <StyledText>{todo.title}</StyledText>
      </View>
      <View style={styles.actions}>
        <StyledButton icon={{ name: "pencil" }} size="small" />
        <StyledButton
          icon={{ name: "trash" }}
          variant="delete"
          size="small"
          onPress={() => deleteTodo(todo.id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 8,
    backgroundColor: STYLES.TODO_BG,
    borderRadius: 10,
  },
  completedContainer: {
    backgroundColor: STYLES.TODO_COMPLETED_BG,
  },
  actions: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  checkTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
