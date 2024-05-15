import { configureStore } from "@reduxjs/toolkit";
import snackbar from "./app_functions/snackbar";

export const projectStore = () => {
  return configureStore({
    reducer: {
      //app functionality
      snackbar: snackbar,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof projectStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
