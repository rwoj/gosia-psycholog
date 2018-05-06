import React from 'react';
import {Route} from 'react-router-dom';
// import './App.css';

import TopNavigation from './pages/TopNavigation';
import Home from './pages/Home';
import Footer from './pages/Footer'

const App =({location}) => (
  <div>
    <TopNavigation />
    <Route location={location} path="/" exact component={Home} />
    <Footer />
  </div>
)

export default App;
