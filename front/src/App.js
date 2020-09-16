import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'

import About from './components/about/about'

import './app.css'
function App() {
  return (
    <BrowserRouter >
      <div className='app'>
        <Navbar />
    
        <Route path='/about' component={About} />
     
      </div>
    </BrowserRouter>
  );
}

export default App;
