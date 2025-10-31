import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { STYLES } from "@/app/consts";
import { ComponentProps } from "react";
import { StyledText } from "../styled-text";

type Props = TouchableOpacityProps & {
  label?: string;
  icon?: {
    name: ComponentProps<typeof Ionicons>["name"];
    size?: number;
  };
  size?: "small" | "normal" | "large";
  sx?: "fullheight";
  variant?: "delete" | "edit" | "save" | "default" | "subtle";
  iconColor?: string;
};

export const StyledButton = ({
  label,
  icon,
  variant = "default",
  size = "normal",
  style,
  disabled,
  iconColor,
  sx,
  ...props
}: Props) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[
        styles.base,
        variant === "delete" && styles.delete,
        variant === "save" && styles.save,
        size === "small" && styles.small,
        size === "large" && styles.large,
        sx === "fullheight" && styles.fullheight,
        variant === "subtle" && { backgroundColor: iconColor + "33" },
        disabled && styles.disabled,
        style,
      ]}
    >
      {icon && icon.name && (
        <Ionicons
          name={icon.name}
          size={icon.size ? icon.size : 16}
          color={iconColor ? iconColor : STYLES.PRIMATY_TEXT}
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
  large: {
    paddingHorizontal: 30,
  },
  disabled: {
    backgroundColor: "#353535ff",
  },
  fullheight: {
    height: "100%",
    borderRadius: 10,
  },
  save: {
    backgroundColor: "#01c53c",
  },
});
