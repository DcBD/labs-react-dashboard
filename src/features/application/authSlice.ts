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
        },
        updateProfileData: (state, action) => {
            if (state.user) {
                state.user.company.expertise = action.payload.expertiseItems;
                state.user.company.specialties = action.payload.specialitiesItems;
                state.user.company.admission_to_practice_law = action.payload.admissionToPracticeLawItems;
                state.user.company.countries = action.payload.countries;
                state.user.panelInformation.hourly_fee = action.payload.hourlyFee;
                state.user.panelInformation.attachments = action.payload.attachments;
                state.user.panelInformation.services_and_projects = action.payload.servicesAndProjects;
                state.user.panelInformation.internal_correspondents = action.payload.internalCorrespondents;
                state.user.proposals = action.payload.proposals;
                state.user.internalReviews = action.payload.internalReviews;
                state.user.amountOfFees = action.payload.amountOfFees;
            }
        }
    },
})



export const { loginUser, updateProfileInformation, updateProfileData } = authSlice.actions

export default authSlice.reducer