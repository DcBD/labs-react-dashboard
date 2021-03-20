


interface INavigationItems {
    platform: Array<INavigationItem>
    workspaces: Array<INavigationItem>
    account: Array<INavigationItem>
}

interface INavigationItem {
    Icon: any,
    Text: any,
    value: string
}




const NavigationItems: INavigationItems = {
    platform: [
        {
            Icon: () => (<span> [ ] </span>),
            Text: () => <span>Home</span>,
            value: "home"
        }
    ],

    workspaces: [],

    account: []

}



export default NavigationItems;