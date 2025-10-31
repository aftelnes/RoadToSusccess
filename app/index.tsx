import "react-native-get-random-values";

import { nanoid } from "nanoid";
import { useCallback, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import { useFonts } from 'expo-font';

import { STYLES } from "./consts";
import { Header } from "./layout/header";
import { TodoCreate } from "./layout/todo-create";
import { TodoList } from "./layout/todo-list";
import { ITodo } from "./types/todo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: STYLES.PRIMATY_BG,
  },
});

export const defaultTodos: ITodo[] = [
  { id: "1", title: "Купить продукты", isCompleted: false },
  {
    id: "2",
    title: "Сделать домашнее задание по React Native",
    isCompleted: true,
  },
  { id: "3", title: "Протестировать экран логина", isCompleted: false },
  { id: "4", title: "Добавить типизацию для API", isCompleted: false },
  { id: "5", title: "Рефакторинг компонента TodoList", isCompleted: true },
  { id: "6", title: "Написать тесты для Utils", isCompleted: false },
  { id: "7", title: "Обновить зависимости npm", isCompleted: false },
  { id: "8", title: "Проверить сборку на Android", isCompleted: true },
  { id: "9", title: "Оптимизировать изображения", isCompleted: false },
  { id: "10", title: "Записать бэкап базы данных", isCompleted: true },
];

export default function Index() {
    const [fontsLoaded] = useFonts({
    'Momo': require('../assets/fonts/MomoSignature-Regular.ttf'),
  });

  const [todos, setTodos] = useState<ITodo[]>(defaultTodos);

  const createTodo = (
    title: ITodo["title"],
    description: ITodo["description"]
  ) => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        title: title,
        description: description,
        isCompleted: false,
      },
    ]);
  };

  const setCheckTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      })
    );
  }, []);

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <Header totalTodos={todos.length} completedTodos={completedTodos} />
      <TodoCreate addTodo={createTodo} />
      <TodoList
        list={todos}
        deleteTodo={deleteTodo}
        setCheckToDo={setCheckTodo}
      />
    </View>
  );
}
