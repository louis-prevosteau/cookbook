import { configureStore } from "@reduxjs/toolkit";
import RootReducer from './reducers';

export const store = configureStore(
    {
        reducer: RootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    }
);

export type RootState = ReturnType<typeof RootReducer>;