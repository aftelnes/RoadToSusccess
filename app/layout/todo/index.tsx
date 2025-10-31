import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";

import { StyledButton } from "@/app/components/styled-button";
import { StyledCheckBox } from "@/app/components/styled-check-box";
import { StyledText } from "@/app/components/styled-text";
import { STYLES } from "@/app/consts";
import { ITodo } from "@/app/types/todo";

type Props = {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  setCheckToDo: (id: string) => void;
};

export const Todo = ({ todo, deleteTodo, setCheckToDo }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
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

  const toggleExpanded = () => {
    if (expanded) {
      // скрыть элементы плавно
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      setExpanded(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  };

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
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={toggleExpanded}
      style={[styles.container, todo.isCompleted && styles.completedContainer]}
    >
      <View style={styles.dataContainer}>
        <View style={styles.checkTitleContainer}>
          <StyledCheckBox
            checked={todo.isCompleted}
            setCheckToDo={setCheckToDo}
            id={todo.id}
          />
          <StyledText>{todo.title}</StyledText>
        </View>

        {expanded && (
          <Animated.View style={{ opacity: fadeAnim }}>
            <StyledText style={styles.description}>
              текст описания екст описания екст описания екст описания екст
              описания екст описания екст описания екст описания
            </StyledText>
          </Animated.View>
        )}
      </View>

      {expanded && (
        <Animated.View style={[styles.actions, { opacity: fadeAnim }]}>
          <StyledButton
            icon={{ name: "pencil" }}
            size="small"
            iconColor="#f3e200"
            variant="subtle"
          />

          {confirmDelete ? (
            <StyledButton
              icon={{ name: "checkmark" }}
              iconColor="#ff3737"
              variant="subtle"
              size="small"
              onPress={handleConfirmPress}
            />
          ) : (
            <StyledButton
              icon={{ name: "trash" }}
              iconColor="#ff3737"
              variant="subtle"
              size="small"
              onPress={handleTrashPress}
            />
          )}
        </Animated.View>
      )}
    </TouchableOpacity>
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
    maxWidth: 280,
  },
  dataContainer: {
    flexDirection: "column",
    gap: 8,
  },
  description: {
    maxWidth: 280,
    color: "#adadadff",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 8,
  },
});
