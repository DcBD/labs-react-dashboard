import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import IComment from 'entities/api/IComment'



export const commentsAdapter = createEntityAdapter<IComment>({});

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: commentsAdapter.getInitialState(),
    reducers: {
        setComments: (state, { payload }: { payload: Array<IComment> }) => {
            commentsAdapter.setAll(state, payload);

            return state;
        },
    },
})


export const { setComments } = commentsSlice.actions

export default commentsSlice.reducer