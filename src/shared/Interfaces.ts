import { FC } from "react";
import { IconName } from "shared/Types";
import { CSSObject } from "styled-components";

export interface Styles extends CSSObject {

}

export type Icons = {
    [name in IconName]: FC;
};