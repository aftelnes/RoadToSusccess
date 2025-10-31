import { StyleSheet, View } from "react-native";

import { StyledText } from "@/app/components/styled-text";
import { STYLES } from "@/app/consts";

type Props = {
  totalTodos: number;
  completedTodos: number;
};

export const Header = ({ totalTodos, completedTodos }: Props) => {
    const formattedDate = new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Amsterdam",
  }).format(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StyledText style={styles.title}>Road to the Dream</StyledText>
        <StyledText >{formattedDate}</StyledText>
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
    gap: 25,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  title: {
    color: "#ffdb4cff",
    fontSize: 20,
    fontFamily: "Momo",
  },
});
