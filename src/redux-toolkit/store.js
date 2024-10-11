import { configureStore } from '@reduxjs/toolkit';
import { textReducer } from './textSlice';
import { editorReducer } from './editorSlice';
import { previewReducer } from './previewSlice';

const store = configureStore({
  reducer: {
    text: textReducer,
    editor: editorReducer,
    preview: previewReducer
  }
});

export default store;