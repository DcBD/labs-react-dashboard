import { Button } from "@material-ui/core"
import { FC } from "react"
import { ButtonColor, ButtonType } from "shared/Types"
import styled from "styled-components";
import { buttonColors, Colors } from "styledHelpers/Colors";
import { Spacing } from "styledHelpers/Spacing";

interface IButton {
    onClick?: () => void
}

interface ButtonBaseProps extends IButton {
    type: ButtonType,
    color: ButtonColor
}

interface StyledButtonProps {
    $borderColor?: string
}

interface IButtonProps extends IButton {

}


const StyledButton = styled(Button) <StyledButtonProps>`
    min-width:15px;
    padding: ${Spacing[1]}rem;
    border-width:2px;
    ${({ $borderColor }) => $borderColor && `border-color:${$borderColor};`}
`;

export const ButtonBase: FC<ButtonBaseProps> = ({ children, type, color, onClick }) => {

    const pallette = buttonColors(color);

    return (
        <StyledButton variant={type} $borderColor={pallette.border} onClick={onClick}> {children} </StyledButton>
    )
}


export const ButtonDarkOutlined: FC<IButtonProps> = ({ children, onClick }) => {
    return <ButtonBase type="outlined" color="dark" onClick={onClick}>{children}</ButtonBase>
}
