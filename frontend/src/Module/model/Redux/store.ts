import { configureStore,Store } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { useDispatch } from "react-redux/es/exports";
import rootReducer from "./rootReducer";


let store:Store=configureStore({
    reducer:rootReducer,
    middleware:[logger,thunk]
});

export default store;
export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();