import './styles/App.scss'
import Editor from './Editor';
import Previewer from './Previewer';

const App = () => {

  return (
    <div className="app-wrapper">
      <Editor />
      <Previewer />
    </div>
  )
}

export default App;
