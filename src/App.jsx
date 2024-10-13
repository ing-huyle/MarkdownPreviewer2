import './styles/App.scss';
import $ from 'jQuery';
import { marked } from 'marked';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { textActions } from './redux-toolkit/textSlice';
import { editorActions } from './redux-toolkit/editorSlice';
import { previewActions } from './redux-toolkit/previewSlice';
import Editor from './Editor';
import Preview from './Preview';

const App = () => {
  const text = useSelector((state) => state.text.text);
  const isEditorExpanded = useSelector((state) => state.editor.isEditorExpanded);
  const isPreviewExpanded = useSelector((state) => state.preview.isPreviewExpanded);
  const dispatch = useDispatch();

  const handleClickEditor = () => {
    dispatch(editorActions.setEditorExpanded());
  }

  const handleClickPreview = () => {
    dispatch(previewActions.setPreviewExpanded());
  }

  const handleChange = (event) => {
    dispatch(textActions.setText(event.target.value))
  }

  useEffect(() => {
    $('#preview').html(marked.parse(text));
  }, [text]);

  return (
    <div className='app-wrapper'>
      <Editor 
        handleClickMaximize={handleClickEditor}
        text={text}
        handleChange={handleChange}
        isEditorExpanded={isEditorExpanded}
        isPreviewExpanded={isPreviewExpanded}
      />
      <Preview
        handleClickMaximize={handleClickPreview}
        isEditorExpanded={isEditorExpanded}
        isPreviewExpanded={isPreviewExpanded}
      />
    </div>
  )
}

export default App;
