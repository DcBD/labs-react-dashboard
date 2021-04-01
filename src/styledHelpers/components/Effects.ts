import { Styles } from "shared/Interfaces";
import { Colors } from "styledHelpers/Colors";



export const backgroundTransition = (): Styles => {
    return {
        transition: 'background-color 0.2s'
    }
}

export const grayBackgroundHover = (): Styles => {
    return {
        ...backgroundTransition(),
        "&:hover": {
            backgroundColor: Colors.grayHover
        }
    }
}