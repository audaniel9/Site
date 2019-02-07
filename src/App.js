import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

//components
import Header from './components/header.js';
import Footer from './components/footer.js';
import Nav from './components/nav.js';
import Aboutme from './components/page_aboutme.js';
import Skills from './components/page_skills.js';
import Education from './components/page_education.js';
import Contact from './components/page_contact.js';

class App extends Component {
  render() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Header />
            <Nav />
            <Route exact path='/' component={Aboutme} />
            <Route exact path='/aboutme' component={Aboutme} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/education' component={Education} />
            <Route exact path='/contact' component={Contact} />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
