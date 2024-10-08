const defaultValue = "defaultValue";

const Editor = () => {
  return (
    <div>
      <div className="title-bar">Editor</div>
      <textarea id="editor">{defaultValue}</textarea>
    </div>
  );
}

export default Editor;