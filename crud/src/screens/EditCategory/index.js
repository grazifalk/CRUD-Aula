import { useContext, useEffect } from "react";
import { Header } from "react-navigation-stack";


export const EditCategory = ({ navigation }) => {

    const { id } = useContext(IdContext);

    const [name, setName] = useState({});

    const [photo, setPhoto] = useState({});

    const getCategory = async () => {
        const { data } = await Api.get(`/categoria/${id}`);
        setName(data.name);
        setPhoto(data.photo);
    };

    useEffect(() => {
        getCategory();
    }, []);

    function goBack() {
        navigation.goBack();
    };

    function save() {
        Api.put(`/categoria/${id}`, {
            nome: name,
            foto: photo,
        }).then(() => {
            alert("Item editado com sucesso!");
            navigation.goBack();
        });
    };

    return (
        <MainContainer>
            <Header title={"Editar categoria"} goBack={goBack} iconName={"arrow-back"} />
            <ImgButton sourceImg={{ uri: photo }} />
            <EditInput name={"Nome:"} value={name} onChangeText={(text) => setName(text)} />
            <MainButton style={{ marginTop: 60 }} onPress={() => save()} >      </MainButton>
            <ButtonText>
                Salvar
            </ButtonText>
        </MainContainer>
    );
};