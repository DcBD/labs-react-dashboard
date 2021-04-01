import { Icon } from "components/common/misc"
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
            Icon: () => <Icon icon="house2" />,
            Text: () => <span>Home</span>,
            value: "home"
        },
        {
            Icon: () => <Icon icon="publications" />,
            Text: () => <span>Publications</span>,
            value: "publications"
        },
        {
            Icon: () => <Icon icon="people" />,
            Text: () => <span>People</span>,
            value: "people"
        },
        {
            Icon: () => <Icon icon="entities2" />,
            Text: () => <span>Entities</span>,
            value: "entities"
        },
        {
            Icon: () => <Icon icon="administration" />,
            Text: () => <span>Administration</span>,
            value: "administration"
        }
    ],

    workspaces: [
        {
            Icon: () => <Icon icon="comments" />,
            Text: () => <span>Client contract</span>,
            value: "client contract"
        },
        {
            Icon: () => <Icon icon="comments" />,
            Text: () => <span>Supplier contract</span>,
            value: "supplier contract"
        },
        {
            Icon: () => <Icon icon="entities" />,
            Text: () => <span>Corporate</span>,
            value: "corporate"
        },
        {
            Icon: () => <Icon icon="comments" />,
            Text: () => <span>Group Norms</span>,
            value: "group norms"
        },
        {
            Icon: () => <Icon icon="comments" />,
            Text: () => <span>Real estate contracts</span>,
            value: "real estate contracts"
        }
    ],

    account: [
        {
            Icon: () => <Icon icon="comments" />,
            Text: () => <span>Corporate</span>,
            value: "corporate"
        },
        {
            Icon: () => <Icon icon="privacy" />,
            Text: () => <span>Group Norms</span>,
            value: "group norms"
        },
        {
            Icon: () => <Icon icon="settings" />,
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