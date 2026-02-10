import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Thunk/slice.js"
export const store =  configureStore({
   reducer:{
    users:userReducer
   }
}) 