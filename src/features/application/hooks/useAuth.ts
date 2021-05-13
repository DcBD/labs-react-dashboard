import { UserInstance } from "features/application/Application";
import { useStore } from "react-redux";

function useAuth(): UserInstance {
    const state = useStore().getState();

    return state.auth.user;
}

export default useAuth;