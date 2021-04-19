import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import IPhoto from 'entities/api/IPhoto';


export const photosAdapter = createEntityAdapter<IPhoto>({});

export const photosSlice = createSlice({
    name: 'photos',
    initialState: photosAdapter.getInitialState(),
    reducers: {
        setPhotos: (state, { payload }: { payload: Array<IPhoto> }) => {
            photosAdapter.setAll(state, payload);

            return state;
        },
    },
})


export const { setPhotos } = photosSlice.actions

export default photosSlice.reducer