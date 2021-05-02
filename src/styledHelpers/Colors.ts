import { ButtonColor } from "shared/Types"

export const Colors = {
    white: "#fff",
    black: "#000",
    background: "#f5f7f9",



    /* #region  Gray */

    grayBorder: "#e8e8e8",
    grayHover: "#b6b6b6",
    grayBackground: "#e8e8e8",
    grayText: "#c4c6c8",

    /* #endregion */


    /* #region  Blue */

    blueBadge: "#0381be",
    blueText: "#495bab",
    blueGradient: "linear-gradient(180deg, rgba(252,252,252,0) 33%, rgba(53,102,235,0.6726891440169818) 100%)",

    /* #endregion */

    /* #region  Dark Blue */

    darkBlueBorder: "#4b5268",
    darkBlueText: "#4b5268",
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