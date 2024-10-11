import { createSlice } from "@reduxjs/toolkit";

const initialState = { isEditorExpanded: false };

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    set_editor_expanded: (state) => {
      state.isEditorExpanded = !state.isEditorExpanded;
    }
  }
});

export const editorReducer = editorSlice.reducer;
export const editorActions = editorSlice.actions;