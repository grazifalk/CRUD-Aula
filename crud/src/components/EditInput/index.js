import colors from "../../themes/colors";
import {Container, NameInput, InputContainer, CustomInput} from "./styles.js";

export const EditInput = ({name, placeHolder, value, onChangeText, autoCapitalize, secureTextEntry}) => {
    return (
        <Container>
            <NameInput>
                {name}
            </NameInput>
            <InputContainer>
                <CustomInput
                    placeholder={placeHolder}
                    placeholderTextColor={colors.secondary}
                    value={value}
                    onChangeText={onChangeText}
                    autoCapitalize={autoCapitalize}
                    secureTextEntry={secureTextEntry}
                />
            </InputContainer>
        </Container>
    )
};