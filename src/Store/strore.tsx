import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import Events_Data from '../Reducers/fetchData';
import Mutated_Events from '../Reducers/uploadsData';
import { combineReducers } from 'redux';
import Registered_Data from '../Reducers/RegisteredEvents'
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  event: Events_Data,
  AddedEvents: Mutated_Events,
  registerEvents : Registered_Data
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store); 

export { store, persistor }; 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
