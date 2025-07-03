import { applyMiddleware, createStore } from "redux"
import ItemReducer from "./reducer"
import { thunk } from "redux-thunk"

const store = createStore(ItemReducer, applyMiddleware(thunk))

export default store