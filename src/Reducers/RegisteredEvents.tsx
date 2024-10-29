import { createSlice } from '@reduxjs/toolkit';
import { EventsData } from '../types/types';

const initialState: EventsData[] = [];

const Registered_Data = createSlice({
  name: 'registerEvents',
  initialState,
  reducers: {
    PushRegisterData: (state, action) => {
      console.log('setting', action.payload);
      state.push(action.payload);
    },
    DeleteRegisterData: (state, action) => {
      return state.filter((data) => data.description !== action.payload);
    },
  },
});

export const selectIsRegisteredAgain = (state: EventsData[], event: EventsData): boolean => {
  return state.some((registeredEvent: EventsData) => registeredEvent.description === event.description);
};

export const { PushRegisterData, DeleteRegisterData } = Registered_Data.actions;
export default Registered_Data.reducer;
