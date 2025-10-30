import { View, StyleSheet } from "react-native";
import { useState } from "react";

import { StyledTextInput } from "@/app/components/styled-text-input";
import { StyledButton } from "@/app/components/styled-button";
import { ITodo } from "@/app/types/todo";

type Props = {
  addTodo: (title: ITodo["title"], description: ITodo["description"]) => void;
};

export const TodoCreate = ({ addTodo }: Props) => {
  const [todoTitle, setTodoTitle] = useState<string>("");

  return (
    <View style={styles.container}>
      <StyledTextInput
        placeholder="Назваение задачи"
        value={todoTitle}
        onChangeText={setTodoTitle}
      />
      <StyledButton
        label="+"
        onPress={() => {
          addTodo(todoTitle, "");
          setTodoTitle("");
        }}
        disabled={!todoTitle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
