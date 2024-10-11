import './styles/App.scss';
import $ from 'jQuery';
import { marked } from 'marked';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { textActions } from './textSlice';
import Editor from './Editor';
import Preview from './Preview';

const App = () => {
  const text = useSelector((state) => state.text);
  const dispatch = useDispatch();

  const handleClickEditor = () => {
    $('.preview-wrapper').toggleClass('display');
    $('#editor').toggleClass('min-height-editor');
    $('#editor').toggleClass('full-height');
    $('#editor').toggleClass('resize-vertical');
    $('#editor').toggleClass('resize-none');
    $('.icon').toggleClass('minimize');
    $('.icon').toggleClass('maximize');
  }

  const handleClickPreview = () => {
    $('.editor-wrapper').toggleClass('display');
    $('#preview').toggleClass('min-height-preview');
    $('#preview').toggleClass('full-height');
    $('.icon').toggleClass('minimize');
    $('.icon').toggleClass('maximize');
  }

  const handleChange = (event) => {
    dispatch(textActions.set_text(event.target.value))
  }

  useEffect(() => {
    $('#preview').html(marked.parse(text));
  }, [text]);

  return (
    <div className='app-wrapper'>
      <Editor handleClickMaximize={handleClickEditor} text={text} handleChange={handleChange} />
      <Preview handleClickMaximize={handleClickPreview} />
    </div>
  )
}

export default App;
