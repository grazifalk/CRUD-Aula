import { Card, Photo, TextContainer, Name } from "./styles";

export const ItemCategory = ({ name, photo }) => {
  return (
    <Card>
      <Photo source={{ uri: photo }} />
      <TextContainer>
        <Name>{name}</Name>
      </TextContainer>
    </Card>
  );
};
