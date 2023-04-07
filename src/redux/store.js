import { composeWithDevTools } from "@redux-devtools/extension"
import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import { manageBookReducer } from "./ManageBookSlice/ManageBookReducer"

export const store=createStore(manageBookReducer,composeWithDevTools(
    applyMiddleware(thunk)
  ))