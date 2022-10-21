import { combineReducers, createStore } from "redux";

import { fakeBookReducer } from "./reducers/fakeBookReducer";

const rootReducer = combineReducers({
    //khai báo reducer
    fakeBookReducer
})

export const store = createStore(rootReducer);