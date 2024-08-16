import { configureStore } from "@reduxjs/toolkit";
import billSlice from "./slices/billSlice";

export default configureStore({
    reducer: {
        bill:billSlice
    }
})