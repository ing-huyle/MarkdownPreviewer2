import "./styles/Editor.scss";
import Titlebar from "./Titlebar";

const defaultValue = "as";

const Editor = () => {
  const handleChange = () => {

  }

  return (
    <div className="editor-wrapper">
      <Titlebar value="Editor" />
      <textarea id="editor" value={defaultValue} onChange={handleChange}></textarea>
    </div>
  );
}

export default Editor;