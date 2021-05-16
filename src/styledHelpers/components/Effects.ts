import { Styles } from "shared/Interfaces";
import { Colors } from "styledHelpers/Colors";
import { FontSizes } from "styledHelpers/Sizes";
import { Spacing } from "styledHelpers/Spacing";



export const backgroundTransition = (): Styles => {
    return {
        transition: 'background-color 0.2s'
    }
}

export const grayBackgroundHover = (): Styles => {
    return {
        ...backgroundTransition(),
        "&:hover": {
            backgroundColor: Colors.grayHover,
            cursor: "pointer"
        }
    }
}

export const fillGray = (): Styles => {
    return {
        backgroundColor: Colors.grayBackground
    }
}


export const rounded = (): Styles => {
    return {
        borderRadius: "30px"
    }
}


export const badge = (text: string | number): Styles => {
    return {
        content: `'${text}'`,
        ...rounded(),
        backgroundColor: Colors.blueBadge,
        color: Colors.white,
        padding: `${Spacing[3]}px ${Spacing[2]}rem`,



    }
}