import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../Slice/authSlice';
import calendarReducer from '../Slice/calendarSlice';
import modalReducer from '../Slice/modalSlice';
import screenReducer from '../Slice/screenSlice';
import layoutReducer from '../Slice/layoutSlice';
import themeReducer from '../Slice/themeSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['calendar', 'modal', 'screen'],
};

const rootReducer = combineReducers({
    auth: authReducer,
    screen: screenReducer,
    calendar: calendarReducer,
    modal: modalReducer,
    layout: layoutReducer,
    theme: themeReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
