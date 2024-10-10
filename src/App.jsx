import './styles/App.scss';
import $ from "jQuery";
import initialValue from './initialValue';
import { marked } from 'marked';
import { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(initialValue);
  
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
          <div className="maximize"></div>
        </div>
        <textarea id="editor" value={value} onChange={handleChange}></textarea>
      </div>
      <div className="preview-wrapper">
        <div className="titlebar">
          <div>Preview</div>
          <div className="maximize"></div>
        </div>
        <div id="preview"></div>
    </div>
    </div>
  )
}

export default App;
