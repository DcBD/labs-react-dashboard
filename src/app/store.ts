import { configureStore } from '@reduxjs/toolkit';

import usersReducer, { userAdapter } from 'features/api/usersSlice';
import commentsReducer, { commentsAdapter } from '../features/api/commentsSlice'
import postsReducer, { postsAdapter } from '../features/api/postsSlice'
import photosReducer, { photosAdapter } from '../features/api/photosSlice'
import authReducer from '../features/application/authSlice'



const store = configureStore({
    reducer: {
        users: usersReducer,
        comments: commentsReducer,
        photos: photosReducer,
        posts: postsReducer,
        auth: authReducer
    },
})

type RootState = ReturnType<typeof store.getState>

export const usersSelectors = userAdapter.getSelectors<RootState>((state) => state.users);
export const commentsSelectors = commentsAdapter.getSelectors<RootState>((state) => state.comments);
export const photosSelectors = photosAdapter.getSelectors<RootState>((state) => state.photos);
export const postsSelectors = postsAdapter.getSelectors<RootState>((state) => state.posts);


export default store;