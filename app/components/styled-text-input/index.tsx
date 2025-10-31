import { TextInput, TextInputProps, StyleSheet } from "react-native";

import { STYLES } from "@/app/consts";

type Props = TextInputProps;

export const StyledTextInput = ({ ...props }: Props) => {
  return (
    <TextInput
      style={[styles.base, props.style]}
      {...props}
      placeholderTextColor="#838383"
    />
  );
};

const styles = StyleSheet.create({
  base: {
    padding: 10,
    color: STYLES.PRIMATY_TEXT,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#838383",
    height: 40,
    flex: 1,
  },
});
