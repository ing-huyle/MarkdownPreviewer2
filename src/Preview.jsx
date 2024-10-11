import "./styles/Preview.scss";
import Titlebar from "./Titlebar";

const Preview = ({ handleClickMaximize }) => {
  return (
    <div className="preview-wrapper">
      <Titlebar name="Preview" handleClickMaximize={handleClickMaximize} />
      <div id="preview" className="min-height-preview"></div>
    </div>
  );
}

export default Preview;