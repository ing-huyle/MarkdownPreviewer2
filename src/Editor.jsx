import './styles/Editor.scss';
import Titlebar from './Titlebar';

const Editor = ({ handleClickMaximize, text, handleChange }) => {
  return (
    <div className='editor-wrapper'>
      <Titlebar name='Editor' handleClickMaximize={handleClickMaximize} />
      <textarea id='editor' className='resize-vertical min-height-editor' value={text} onChange={handleChange}></textarea>
    </div>
  );
}

export default Editor;