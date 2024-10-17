import './styles/Titlebar.scss';

const Titlebar = ({ name, handleClickMaximize, isEditorExpanded, isPreviewExpanded }) => {
  return (
    <div className='titlebar'>
      <div>{name}</div>
      <div
        className={`icon ${isEditorExpanded || isPreviewExpanded ? 'minimize' : 'maximize'}`}
        onClick={handleClickMaximize}>
      </div>
    </div>
  );
};

export default Titlebar;