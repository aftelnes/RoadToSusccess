import { StyleSheet, View, Animated } from "react-native";
import { useState, useRef, useEffect } from "react";

import { StyledCheckBox } from "@/app/components/styled-check-box";
import { StyledButton } from "@/app/components/styled-button";
import { StyledText } from "@/app/components/styled-text";
import { ITodo } from "@/app/types/todo";
import { STYLES } from "@/app/consts";

type Props = {
  todo: ITodo;
  deleteTodo: (id: string) => void;
};

export const Todo = ({ todo, deleteTodo }: Props) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (confirmDelete) {
      if (timerRef.current) clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          setConfirmDelete(false);
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        });
      }, 5000);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [confirmDelete]);

  const handleTrashPress = () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
    }
  };

  const handleConfirmPress = () => {
    deleteTodo(todo.id);
    setConfirmDelete(false);
  };

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

        <Animated.View style={{ opacity: fadeAnim }}>
          {confirmDelete ? (
            <StyledButton
              icon={{ name: "checkmark" }}
              size="small"
              variant="delete"
              onPress={handleConfirmPress}
            />
          ) : (
            <StyledButton
              icon={{ name: "trash" }}
              variant="delete"
              size="small"
              onPress={handleTrashPress}
            />
          )}
        </Animated.View>
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
