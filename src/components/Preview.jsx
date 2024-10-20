import '../styles/Preview.scss';
import Titlebar from './Titlebar';

const Preview = ({ handleClickMaximize, isEditorExpanded, isPreviewExpanded }) => {
  return (
    <div className={`preview-wrapper ${isEditorExpanded ? 'display' : ''}`}>
      <Titlebar
        name='Preview'
        handleClickMaximize={handleClickMaximize}
        isPreviewExpanded={isPreviewExpanded}
      />
      <div id='preview' className={isPreviewExpanded ? 'full-height' : 'min-height-preview'}></div>
    </div>
  );
}

export default Preview;