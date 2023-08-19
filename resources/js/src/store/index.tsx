import {combineReducers, configureStore} from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import rfqFormSlice from "./rfqFormSlice";
import manufactureFormSlice from "./manufactureFormSlice";

const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    rfqFormSlice: rfqFormSlice,
    manufactureForm : manufactureFormSlice,
});

export default configureStore({
    reducer: rootReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
