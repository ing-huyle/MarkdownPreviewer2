import "./styles/Titlebar.scss";

const Titlebar = ({ value }) => {
  return (
    <div className="titlebar">
      <div>{value}</div>
      <div className="maximize"></div>
    </div>
  );
}

export default Titlebar;