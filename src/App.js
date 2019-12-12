import React from 'react';
import Pages from './pages/Pages';
import "rbx/index.css";

class App extends React.Component {
  render() {

    const app = {
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    };
  
    return (<div style={app}><Pages/></div>);
  }
}

export default App;
