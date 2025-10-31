import { useState } from "react";
import { StyleSheet, View } from "react-native";

import { StyledButton } from "@/app/components/styled-button";
import { StyledTextInput } from "@/app/components/styled-text-input";
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
        size="large"
        sx="fullheight"
        variant="save"
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
    paddingVertical: 10,
  },
});
