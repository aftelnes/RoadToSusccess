import { View, StyleSheet } from "react-native";

import { StyledText } from "@/app/components/styled-text";
import { STYLES } from "@/app/consts";

type Props = {
  totalTodos: number;
  completedTodos: number;
};

export const Header = ({ totalTodos, completedTodos }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StyledText>Road to the Dream</StyledText>
        <StyledText>Октябрь 29, 2025</StyledText>
      </View>

      <StyledText>
        Завершено: {completedTodos}/{totalTodos}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: STYLES.SECONDARY_BG,
    gap: 10,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
