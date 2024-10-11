import { createSlice } from '@reduxjs/toolkit';
import initialText from '../initialText';

const initialState = { 
  text: initialText
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    set_text: (state, action) => {
      state.text = action.payload;
    }
  }
});

export const textReducer = textSlice.reducer;
export const textActions = textSlice.actions;