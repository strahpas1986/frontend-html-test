import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import Sidebar from '../Sidebar/Sidebar';
import './App.css';

library.add(fas);

function App() {
  return (
    <Sidebar />
  );
}

export default App;
