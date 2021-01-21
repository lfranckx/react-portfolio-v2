import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Skills from './components/pages/Skills';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Skills} />
          <Route path='/services' component={Portfolio} />
          <Route path='/products' component={Resume} />
          <Route path='/sign-up' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
