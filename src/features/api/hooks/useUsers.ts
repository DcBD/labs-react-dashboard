import IUser from "entities/api/IUser";
import { useStore } from "react-redux";

function useUsers(): IUser[] {
    const state = useStore().getState();

    return state.users.entities;
}

export default useUsers;