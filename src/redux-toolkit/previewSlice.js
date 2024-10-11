import { createSlice } from "@reduxjs/toolkit";

const initialState = { isPreviewExpanded: false };

const previewSlice = createSlice({
  name: 'preview',
  initialState,
  reducers: {
    set_preview_expanded: (state) => {
      state.isPreviewExpanded = !state.isPreviewExpanded;
    }
  }
});

export const previewReducer = previewSlice.reducer;
export const previewActions = previewSlice.actions;