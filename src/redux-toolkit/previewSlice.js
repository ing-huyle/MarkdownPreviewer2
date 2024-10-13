import { createSlice } from "@reduxjs/toolkit";

const initialState = { isPreviewExpanded: false };

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    setPreviewExpanded: (state) => {
      state.isPreviewExpanded = !state.isPreviewExpanded;
    }
  }
});

export const previewReducer = previewSlice.reducer;
export const previewActions = previewSlice.actions;