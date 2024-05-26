import { configureStore } from "@reduxjs/toolkit";
import snackbar from "./app_functions/snackbar";
import navMenuFunctions from "./app_functions/navMenuFunctions";

//user
import userAuthentication from "./user/auth";
import myVerificationHistory from "./user/allVerificationHistory";

export const projectStore = () => {
  return configureStore({
    reducer: {
      //app functionality
      snackbar: snackbar,
      menuFunctions: navMenuFunctions,

      //user
      userAuthentication: userAuthentication,
      myVerificationHistory: myVerificationHistory,
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
