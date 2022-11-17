import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const CustomImage = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 100px;
    border: 10px solid;
    border-color: ${colors.imageColor};
`;

export const Container = styled.View`
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 20px;
`;