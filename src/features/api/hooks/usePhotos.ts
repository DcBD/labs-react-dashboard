import IPhoto from "entities/api/IPhoto";
import { useStore } from "react-redux";

function usePhotos(): IPhoto[] {
    const state = useStore().getState();

    return state.photos.entities;
}

export default usePhotos;