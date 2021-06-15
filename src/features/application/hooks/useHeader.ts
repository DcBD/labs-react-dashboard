import { toggleNavigationMenuVisibility } from "features/application/authSlice";

import { useDispatch, useStore } from "react-redux";

function useHeader(): [boolean, (toggle: boolean) => void] {
    const dispatch = useDispatch();

    const value = useStore().getState().auth.navMenuVisible

    const toggle = (toggle: boolean) => {
        dispatch(toggleNavigationMenuVisibility(toggle));
    }

    return [value, toggle];
}

export default useHeader;