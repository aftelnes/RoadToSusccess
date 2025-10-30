import { Text, TextProps, StyleSheet } from "react-native";
import { FC } from "react";

import { STYLES } from "@/app/consts";

type TStyledTextProps = TextProps;

export const StyledText: FC<TStyledTextProps> = ({ style, ...props }) => {
  return <Text style={[styles.base, style]} {...props} />;
};

const styles = StyleSheet.create({
  base: {
    color: STYLES.PRIMATY_TEXT,
  },
});
