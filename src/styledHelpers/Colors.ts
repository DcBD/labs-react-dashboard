import { ButtonColor } from "shared/Types"

export const Colors = {
    white: "#fff",
    black: "#000",




    /* #region  Gray */

    grayBorder: "#e8e8e8",
    grayHover: "#b6b6b6",
    grayBackground: "#e8e8e8",
    grayText: "#c4c6c8",

    /* #endregion */


    /* #region  Blue */

    blueBadge: "#0381be",
    blueText: "#495bab",

    /* #endregion */

    /* #region  Dark Blue */

    darkBlueBorder: "#4b5268",

    /* #endregion */
}


export const buttonColors = (color: ButtonColor): { border: string } => {
    let border;

    switch (color) {
        case "dark":
            border = Colors.darkBlueBorder;
            break;
        default:
            border = Colors.grayBorder;
            break;
    }

    return {
        border: border
    }
}