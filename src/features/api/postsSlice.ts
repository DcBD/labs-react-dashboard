import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import IPost from 'entities/api/IPost';


export const postsAdapter = createEntityAdapter<IPost>({});

export const postsSlice = createSlice({
    name: 'posts',
    initialState: postsAdapter.getInitialState(),
    reducers: {
        setPosts: (state, { payload }: { payload: Array<IPost> }) => {
            postsAdapter.setAll(state, payload);

            return state;
        },
    },
})


export const { setPosts } = postsSlice.actions

export default postsSlice.reducer