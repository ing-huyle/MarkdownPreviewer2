import Titlebar from "./Titlebar";

const defaultValue = "defaultValue";

const Editor = () => {
  return (
    <div>
      <Titlebar value="Editor" />
      <textarea id="editor">{defaultValue}</textarea>
    </div>
  );
}

export default Editor;