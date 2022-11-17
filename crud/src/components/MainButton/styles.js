import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const MainButton = styled.TouchableOpacity`
    height: 57px;
    width: 123px;
    background-color: ${colors.buttonColor};
    border-radius: 20px;
    border: 3px solid ${colors.tertiary};
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: ${colors.tertiary};
    font-size: 14px;
    align-self: center;
    position: absolute;
    font-family: "sans-serif";
    font-style: normal;
    font-weight: bold;
    line-height: 20px;
`;