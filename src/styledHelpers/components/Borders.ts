import { Styles } from 'shared/Interfaces'
import { Colors } from 'styledHelpers/Colors'


export const border = (): Styles => {
    return {
        border: `solid ${Colors.grayBorder} 1px`,
    }
}

export const borderBottom = (): Styles => {
    return {
        ...border(),
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none"
    }
}

export const borderRounded = (): Styles => {
    return {
        ...border(),
        borderRadius: "10px",
    }
}

export const borderRoundedWithoutTop = (): Styles => {
    return {
        ...borderRounded(),
        borderTop: "0px"
    }
}