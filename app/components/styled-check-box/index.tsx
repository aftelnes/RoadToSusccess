import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type Props = {
  checked: boolean;
  onCheck: () => void;
};

export const StyledCheckBox = ({ checked, onCheck }: Props) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <Ionicons
        name={checked ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={checked ? "#01c53cff" : "#fff"}
      />
    </TouchableOpacity>
  );
};
