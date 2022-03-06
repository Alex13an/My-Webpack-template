import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./reducers/counterSlice";

const RootReducer = combineReducers({
	counterSlice,
})

export default RootReducer