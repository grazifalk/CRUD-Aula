import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { useNavigation } from "@react-navigation/native";
import { PlusButton } from "../../components/PlusButton/index.js";
import { Api } from "../../services";
import { FlatList } from "react-native";
import { ItemCategory } from "../../components/ItemCategory/index.js";
import { useState, useEffect } from "react";

export const Categories = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState([]);

  const renderItem = ({ item }) => (
    <ItemCategory name={item.nome} photo={item.foto} />
  );

  useEffect(() => {
    getCategories();
  }, [category]);

  const getCategories = async () => {
    const { data } = await Api.get("/categoria");
    setCategory(data);
  };

  function goBack() {
    navigation.goBack();
  };

  return (
    <MainContainer>
      <Header title={"categorias"} iconName={"arrow-back"} goBack={goBack} />
      <PlusButton onPress={() => navigation.navigate("CategoryRegister")} />
      <FlatList
        data={category}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </MainContainer>
  );
};
