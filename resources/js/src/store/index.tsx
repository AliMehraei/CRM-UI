import {combineReducers, configureStore} from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import rfqFormSlice from "./rfqFormSlice";

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    rfqFormSlice: rfqFormSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
