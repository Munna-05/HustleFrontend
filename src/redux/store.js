import {configureStore} from '@reduxjs/toolkit'

import authReducer from '../redux/features/userSlice.js'

export const store = configureStore({
    reducer : {
        user:authReducer
    }
})