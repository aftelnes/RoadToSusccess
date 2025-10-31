import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type Props = {
  checked: boolean;
  id: string;
  setCheckToDo: (id: string) => void;
};

export const StyledCheckBox = ({ checked, id, setCheckToDo }: Props) => {
  return (
    <TouchableOpacity onPress={() => setCheckToDo(id)}>
      <Ionicons
        name={checked ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={checked ? "#01c53cff" : "#fff"}
      />
    </TouchableOpacity>
  );
};
