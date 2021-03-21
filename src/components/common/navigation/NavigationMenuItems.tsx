import React from 'react'
import { Icon } from "components/common/misc"

import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

import { FC } from "react";


interface INavigationItems {
    platform: Array<INavigationItem>
    workspaces: Array<INavigationItem>
    account: Array<INavigationItem>
}

export interface INavigationItem {
    Icon: any,
    Text: any,
    value: string
}




const NavigationItems: INavigationItems = {
    platform: [
        {
            Icon: () => <Icon IconComponent={HomeIcon} />,
            Text: () => <span>Home</span>,
            value: "home"
        },
        {
            Icon: () => <Icon IconComponent={WebIcon} />,
            Text: () => <span>Publications</span>,
            value: "publications"
        }
    ],

    workspaces: [],

    account: []
}

export function getItem(value: string): INavigationItem | undefined {
    const items = NavigationItems;

    const allItems = [...items.platform, ...items.workspaces, ...items.account];

    return allItems.find((item) => item.value.toLowerCase() === value.toLowerCase());
}

export function getItems(value: string): Array<INavigationItem> {
    const items = NavigationItems;

    const allItems = [...items.platform, ...items.workspaces, ...items.account];

    return allItems.filter((item) => item.value.toLowerCase() === value.toLowerCase());
}



export default NavigationItems;