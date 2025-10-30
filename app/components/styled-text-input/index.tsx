import { STYLES } from "@/app/consts";
import { TextInput, TextInputProps, StyleSheet } from "react-native";

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
    padding: 20,
    color: STYLES.PRIMATY_TEXT,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#838383",
    height: 64,
    flex: 1,
  },
});
