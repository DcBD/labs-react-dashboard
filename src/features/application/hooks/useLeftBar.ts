import { toggleLeftBarVisibility } from "features/application/authSlice";

import { useDispatch, useStore } from "react-redux";

function useLeftBar(): [boolean, (toggle: boolean) => void] {
    const dispatch = useDispatch();

    const value = useStore().getState().auth.leftBarVisible

    const toggle = (toggle: boolean) => {
        dispatch(toggleLeftBarVisibility(toggle));
    }

    return [value, toggle];
}

export default useLeftBar;