import { createSlice } from '@reduxjs/toolkit';
import { EventsData } from '../types/types';

const initialState: EventsData[] = [];

const Uploads_Data = createSlice({
  name: 'mutatedEvents',
  initialState,
  reducers: {
    PushData: (state, action) => {
      if (Array.isArray(state)) {
        if (Array.isArray(action.payload)) {
          state.push(...action.payload ); 
        } else {
          state.push(action.payload);
        }
      }
    },
    DeleteOneData : (state , action)=> {
      
      return state.filter((data)=> data.id !== action.payload)
    }
  },
});

export const { PushData , DeleteOneData } = Uploads_Data.actions;
export default Uploads_Data.reducer;
