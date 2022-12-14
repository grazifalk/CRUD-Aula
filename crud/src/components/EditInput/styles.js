import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
    margin-bottom: 30px;
`;

export const NameInput = styled.Text`
    font-family: "Roboto";
    font-weight: 400;
    font-size: 14px;
`;

export const InputContainer = styled.View`
    flex-direction: row;
`;

export const CustomInput = styled.TextInput`
    height: 26px;
    width: 346px;
    background-color: ${colors.primary};
    border-bottom-color: ${colors.secondary};
    border-bottom-width: 1px;
    align-items: center;
    color: ${colors.secondary};
    font-weight: 400;
    font-family: "Roboto";
    font-size: 20px;
`;