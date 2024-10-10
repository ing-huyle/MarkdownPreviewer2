import './styles/App.scss';
import $ from "jQuery";
import initialValue from './initialValue';
import { marked } from 'marked';
import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(initialValue);
  
  const handleClickEditor = () => {
    $(".preview-wrapper").toggleClass("display");
    $("#editor").toggleClass("min-height");
    $("#editor").toggleClass("full-height");
    $("#editor").toggleClass("resize-vertical");
    $("#editor").toggleClass("resize-none");
    $(".icon").toggleClass("minimize");
    $(".icon").toggleClass("maximize");
  }

  const handleClickPreview = () => {
    $(".editor-wrapper").toggleClass("display");
    $("#preview").toggleClass("full-height");
    $(".icon").toggleClass("minimize");
    $(".icon").toggleClass("maximize");
  }

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    $("#preview").html(marked.parse(value));
  }, [value]);

  return (
    <div className="app-wrapper">
      <div className="editor-wrapper">
        <div className="titlebar">
          <div>Editor</div>
          <div className="icon maximize" onClick={handleClickEditor}></div>
        </div>
        <textarea id="editor" className="resize-vertical min-height" value={value} onChange={handleChange}></textarea>
      </div>
      <div className="preview-wrapper">
        <div className="titlebar">
          <div>Preview</div>
          <div className="icon maximize" onClick={handleClickPreview}></div>
        </div>
        <div id="preview"></div>
    </div>
    </div>
  )
}

export default App;
