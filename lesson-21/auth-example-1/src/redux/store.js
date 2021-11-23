import {configureStore} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

import authReducer from "./auth/auth-reducer";
// import productsReducer from "./products/products-reducer";

const authConfig = {
    key: "auth",
    storage,
    whitelist: ["token"]
};

const authPersistReducer = persistReducer(authConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: authPersistReducer,
        // products: productsReducer
        // loading: 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
