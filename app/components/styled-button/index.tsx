import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { StyledText } from "../styled-text";
import { STYLES } from "@/app/consts";
import { ComponentProps } from "react";

type Props = TouchableOpacityProps & {
  label?: string;
  icon?: {
    name: ComponentProps<typeof Ionicons>["name"];
    size?: number;
  };
  size?: "small" | "normal" | "large";
  variant?: "delete" | "edit" | "save" | "default";
};

export const StyledButton = ({
  label,
  icon,
  variant = "default",
  size = "normal",
  style,
  disabled,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[
        styles.base,
        variant === "delete" && styles.delete,
        size === "small" && styles.small,
        disabled && styles.disabled,
        style,
      ]}
    >
      {icon && icon.name && (
        <Ionicons
          name={icon.name}
          size={icon.size ? icon.size : 16}
          color={STYLES.PRIMATY_TEXT}
        />
      )}
      {label && <StyledText>{label}</StyledText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: "#005bf0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  delete: {
    backgroundColor: "#d80000ff",
  },
  small: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  disabled: {
    backgroundColor: "#353535ff",
  },
});
