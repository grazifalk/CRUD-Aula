import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Card = styled.View`
  flex-direction: row;
  background-color: ${colors.secondary};
  width: 330px;
  height: 160px;
  border-radius: 20px;
  border: 3px solid ${colors.tertiary};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 120px;
  border-radius: 20px;
  margin-left: 15px;
  border: 3px solid ${colors.primary};
`;

export const TextContainer = styled.View`
  width: 170px;
  margin-left: 15px;
  position: absolute;
  top: 20px;
  left: 120px;
`;

export const Name = styled.Text`
  color: ${colors.primary};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

export const CustomButton = styled.TouchableOpacity`
  margin: 0 10px 0;
`;
