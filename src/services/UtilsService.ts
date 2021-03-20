import { IconSize } from "shared/Size";


export class UtilsService {

    /**
     * Says hello in console.
     */
    public static SayHello() : void{
        console.info("Hello");
    }

    public static IconSizeClass(iconSize : IconSize) : string{
        return `icon-size--${iconSize}`;
    }

}