import { createSlice } from '@reduxjs/toolkit';
import { EventsData } from '../types/types';

const initialState: EventsData[] = []

const Events_Data = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.length = 0;
            state.push(...action.payload);
        },
        RemoveData : (state , action)=> {
            return state.filter((data)=> data.id !== action.payload)
        }
    },
});

export const { setData   , RemoveData} = Events_Data.actions;

export default Events_Data.reducer;
