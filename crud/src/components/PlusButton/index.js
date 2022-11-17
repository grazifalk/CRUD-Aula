import {AntDesign} from "@expo/vector-icons";
import colors from "../../themes/colors";
import { TouchableOpacity } from "react-native";

export const PlusButton = ({onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{marginBottom: 50}}>
            <AntDesign name="pluscircleo" size={60} color={colors.secondary} />
        </TouchableOpacity>
    )
}