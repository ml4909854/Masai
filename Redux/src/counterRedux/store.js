
import {createStore} from "redux"
import countReducer from "./counterReducer"
export const store = createStore(countReducer)