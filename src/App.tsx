import React from 'react';
import './App.scss';

import DiscoveryPage from './page/DiscoveryPage';
import NavigationIcon from './components/Navigation/NavigationIcon';

function App() {
  return (
    <div className="App">
      <NavigationIcon />
      <DiscoveryPage />
    </div>
  );
}

export default App;
