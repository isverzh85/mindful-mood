import React from 'react';
import Routing from './routing/index';
import './Pages/Home/styles.module.scss';

function App() {
  return (
    <div className="App">
        <>
          <header className="App-header">
            <Routing/>
          </header>
        </>
    </div>
  );
}

export default App;
