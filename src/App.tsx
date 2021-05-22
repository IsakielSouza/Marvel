import React from 'react';

import Header from './components/Header';
import ListHerois from './pages/ListHerois'
import { GlobalStyle } from './styles/global';

function App() {
  return (
      <>
        <Header />
        <GlobalStyle />
        <ListHerois />
      </>
  );
}

export default App;
