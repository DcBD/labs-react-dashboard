import { Button } from "@material-ui/core"
import { FC } from "react"
import { ButtonColor, ButtonType } from "shared/Types"
import styled from "styled-components";
import { buttonColors, Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";


interface ButtonBaseProps {
    type: ButtonType,
    color: ButtonColor
}

interface StyledButtonProps {
    borderColor?: string
}

interface IButtonProps {

}


const StyledButton = styled(Button) <StyledButtonProps>`
    min-width:15px;
    padding: ${Spacing[1]}rem;
    border-width:2px;
    ${({ borderColor }) => borderColor && `border-color:${borderColor};`}
`;

export const ButtonBase: FC<ButtonBaseProps> = ({ children, type, color }) => {

    const pallette = buttonColors(color);

    return (
        <StyledButton variant={type} borderColor={pallette.border}> {children} </StyledButton>
    )
}


export const ButtonDarkOutlined: FC<IButtonProps> = ({ children }) => {
    return <ButtonBase type="outlined" color="dark">{children}</ButtonBase>
}
