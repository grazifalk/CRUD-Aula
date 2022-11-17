import { Container, TitleContainer, Title, Logo } from "./styles.js";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../themes/colors.js";

export const Header = ({ title, goBack, iconName }) => {
  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <Ionicons name={iconName} size={35} color={colors.primary} />
      </TouchableOpacity>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <Logo source={require("../../../assets/icon.png")} />
    </Container>
  );
};
