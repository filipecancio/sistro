import React from 'react';
import Pages from './pages/Pages';
import "rbx/index.css";
import Header from './components/header/Header';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header/>
        <Pages/>
      </div>
    );
  }
}

export default App;
