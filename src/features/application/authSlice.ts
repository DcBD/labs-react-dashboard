import { createAction, createEntityAdapter, createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Session, UserInstance } from 'features/application/Application';





const initialState: Session = {

}





export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        updateProfileInformation: (state, action) => {
            if (state.user) {
                state.user.name = action.payload.name;
                state.user.surname = action.payload.surname;
                state.user.email = action.payload.email;
                state.user.company.job_title = action.payload.job_title;
                state.user.phone = action.payload.phone;
            }
        }
    },
})



export const { loginUser, updateProfileInformation } = authSlice.actions

export default authSlice.reducer