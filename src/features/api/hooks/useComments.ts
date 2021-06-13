import IComment from "entities/api/IComment";
import { UserInstance } from "features/application/Application";
import { useStore } from "react-redux";

function useComments(): IComment[] {
    const state = useStore().getState();

    return state.comments.entities;
}

export default useComments;