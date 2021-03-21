import { FC } from "react";


interface IIconProps {
    IconComponent: any
}


const Icon: FC<IIconProps> = ({ IconComponent }: IIconProps) => {

    return <div>
        {<IconComponent />}
    </div>
}

export default Icon;