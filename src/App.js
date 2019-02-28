import React from 'react';
import Header from './components/Header';
import './styles.css';

import Routes from './routes'

import Main from './pages/main';

import api from './services/api';

const App =()=>(
  <div className="App">
  <Header />
  <Routes />
 </div>

);


export default App;
