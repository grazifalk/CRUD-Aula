import { useState } from "react";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import {EditInput } from "../../components/EditInput/index.js";
import { MainButton, ButtonText } from "../../components/MainButton/styles.js";
import { ImgButton } from "../../components/ImgButton/index.js";
import { Api } from "../../services/index.js";

export const CategoryRegister = ({navigation}) => {
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("https://i.imgur.com/khLyPgQ.png");

    const addPost = () => {
        const data = {
            nome: name,
            foto: photo,
        };

        Api.post("/categoria", data)
           .then((res) => {
                alert("Item Cadastrado com sucesso!");
                navigation.goBack();
           });
    };

    function goBack () {
        navigation.goBack();
    }

    return (
        <MainContainer>
            <Header title = {"Cadastrar Categoria"} goBack = {goBack} iconName = {"arrow-back"}  />
            <ImgButton sourceImage = {photo}/>
            <EditInput
                placeHolder={"Informe a categoria"}
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize={"words"}
            />
            <EditInput
                placeHolder={"Informe o endereço da imagem"}
                onChangeText={(text) => setPhoto(text)}
                autoCapitalize={"words"}
            />
            <MainButton onPress={() => addPost()}>
                <ButtonText>
                    Cadastrar
                </ButtonText>
            </MainButton>
        </MainContainer>
    )
};