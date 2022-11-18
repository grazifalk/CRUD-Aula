import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../services/index.js";
import colors from "../../themes/colors";
import { Card, Photo, TextContainer, Name, CustomButton, ButtonsContainer } from "./styles";
import { IdContext } from "../../context/index.js";

export const ItemCategory = ({ name, photo }) => {

  const { setId } = useContext(IdContext)
  const navigation = useNavigation();

  function deleteItem(id) {
    Api.delete(`/categoria/${id}`)
      .then(() => {
        alert("Item excluido com sucesso!");
        navigation.navigate("Categories");
      });
  };

  function editItem(id) {
    const itemId = id;
    setId(itemId);
    navigation.navigate("EditCategory");
  };

  return (
    <Card>
      <Photo source={{ uri: photo }} />
      <TextContainer>
        <Name>{name}</Name>
      </TextContainer>
      <ButtonsContainer>
        <CustomButton onPress={() => deleteItem(id)}>
          <FontAwesome5 name="trash" size={20} color={colors.primary} />
        </CustomButton>
        <CustomButton onPress={() => editItem(id)}> 
          <MaterialIcons name="edit" size={24} color={colors.primary} />
        </CustomButton>
      </ButtonsContainer>
    </Card>
  );
};
