import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import IUser from 'entities/api/IUser'


export const userAdapter = createEntityAdapter<IUser>({});

export const usersSlice = createSlice({
    name: 'users',
    initialState: userAdapter.getInitialState(),
    reducers: {
        setUsers: (state, { payload }: { payload: Array<IUser> }) => {
            userAdapter.setAll(state, payload);

            return state;
        },
    },
})


export const { setUsers } = usersSlice.actions

export default usersSlice.reducer