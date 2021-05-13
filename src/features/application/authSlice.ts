import { createAction, createEntityAdapter, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Session, UserInstance } from 'features/application/Application';





const initialState: Session = {
    user: undefined
}





export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        }
    },
})



export const { loginUser } = authSlice.actions

export default authSlice.reducer