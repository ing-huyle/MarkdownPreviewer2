import "./styles/Titlebar.scss";

const Titlebar = ({ name, handleClickMaximize }) => {
  return (
    <div className="titlebar">
      <div>{name}</div>
      <div className="icon maximize" onClick={handleClickMaximize}></div>
    </div>
  );
};

export default Titlebar;