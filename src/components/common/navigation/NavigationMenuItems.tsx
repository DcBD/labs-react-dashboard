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
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Home</span>,
            value: "home"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Publications</span>,
            value: "publications"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>People</span>,
            value: "people"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Entities</span>,
            value: "entities"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Administration</span>,
            value: "administration"
        }
    ],

    workspaces: [
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Client contract</span>,
            value: "client contract"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Supplier contract</span>,
            value: "supplier contract"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Corporate</span>,
            value: "corporate"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Group Norms</span>,
            value: "group norms"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Real estate contracts</span>,
            value: "real estate contracts"
        }
    ],

    account: [
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Corporate</span>,
            value: "corporate"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Group Norms</span>,
            value: "group norms"
        },
        {
            Icon: () => <Icon icon="house" />,
            Text: () => <span>Real estate contracts</span>,
            value: "real estate contracts"
        }
    ]
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