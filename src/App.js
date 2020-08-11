import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
          </Switch>
        </Navbar>
      </Router>

    );

  }
}

export default App;