import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";

export const store = configureStore({
	reducer: {
		RootReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export default store