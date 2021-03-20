import React from 'react';

import { ReactComponent as LogoIcon } from 'icons/logo.svg'
import { IconSize } from 'shared/Size';
import { UtilsService } from 'services/UtilsService';
import './logo.scss';


interface ILogoProps {
    size?: IconSize
}

const Logo = ({
    size = "default"
}: ILogoProps) => {

    return <div className={`trademark-logo ${UtilsService.IconSizeClass(size)}`}>
        <LogoIcon />
    </div>

}




export default Logo