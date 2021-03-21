import { FC } from "react";


interface IIconProps {
    IconComponent: any
}


const Icon: FC<IIconProps> = ({ IconComponent }: IIconProps) => {

    return <div className="svg-disable-events">
        {<IconComponent />}
    </div>
}

export default Icon;