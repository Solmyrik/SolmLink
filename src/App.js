import Header from './components/Header';
import Form from './components/Form/index';
import Main from './components/Main/Main';
import List from './components/List/List';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(true);
  const [list, setList] = useState([]);
  const [link, setLink] = useState('');
  const [linkAr, setLinkAr] = useState([]);
  const onChangeList = (shortLink) => {
    setLinkAr((prev) => {
      return [link, ...prev];
    });
    setList((prev) => {
      return [shortLink, ...prev];
    });
  };
  return (
    <div className={theme ? 'wrapper' : 'wrapper wrapper__dark'}>
      <Header theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
      <Form theme={theme} onChangeList={onChangeList} setLink={setLink} link={link} />
      <List theme={theme} list={list} link={linkAr} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
