import '../styles/Editor.scss';
import Titlebar from './Titlebar';

const Editor = ({ handleClickMaximize, text, handleChange, isEditorExpanded, isPreviewExpanded }) => {
  return (
    <div className={`editor-wrapper ${isPreviewExpanded ? 'display' : ''}`}>
      <Titlebar
        name='Editor'
        handleClickMaximize={handleClickMaximize}
        isEditorExpanded={isEditorExpanded}
      />
      <textarea
        id='editor'
        className={isEditorExpanded ? 'resize-none full-height' : 'resize-vertical min-height-editor'}
        value={text}
        onChange={handleChange}>
      </textarea>
    </div>
  );
}

export default Editor;