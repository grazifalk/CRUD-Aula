import { Container, CustomImage } from "./styles.js"; 

export const ImgButton = ({sourceImage}) => {
    return (
        <Container>
            <CustomImage source = {sourceImage} />
        </Container>
    )
};