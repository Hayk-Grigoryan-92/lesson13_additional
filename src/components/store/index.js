import { createStore } from "redux"
import { userReducer } from './reducer/addUser'

export const store = createStore(userReducer)