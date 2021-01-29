import React from 'react';
import Navbar from './components/Navbar';
import './components/styles/App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/resume' component={Resume} />
            <Route path='/contact' component={Contact} />
            <Route path={'/about'} component={About}/>
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
