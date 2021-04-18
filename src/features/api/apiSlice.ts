import { createSlice } from '@reduxjs/toolkit'
import IComment from 'entities/api/IComment'
import IPhoto from 'entities/api/IPhoto'
import IPost from 'entities/api/IPost'
import IUser from 'entities/api/IUser'
import ICollection from 'entities/ICollection'




interface ApiState {
    users: ICollection<IUser>,
    comments: ICollection<IComment>,
    photos: ICollection<IPhoto>,
    posts: ICollection<IPost>
}

const initialState: ApiState = {
    users: {},
    comments: {},
    photos: {},
    posts: {}
}


export const apiSlice = createSlice({
    name: 'api',
    initialState: initialState,
    reducers: {
        setUsers: (state, { payload }: { payload: ICollection<IUser> }) => {
            state.users = payload;
        },
        setComments: (state, { payload }: { payload: ICollection<IComment> }) => {
            state.comments = payload;
        },
        setPhotos: (state, { payload }: { payload: ICollection<IPhoto> }) => {
            state.photos = payload;
        },
        setPosts: (state, { payload }: { payload: ICollection<IPost> }) => {
            state.posts = payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUsers, setComments, setPhotos, setPosts } = apiSlice.actions

export default apiSlice.reducer