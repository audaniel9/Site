import React, {Component} from 'react';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

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

            <Route render={({location}) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={400}
                        classNames="fade">
                        <Switch location={location}>
                            <Route exact path='/' component={Aboutme} />
                            <Route exact path='/aboutme' component={Aboutme} />
                            <Route exact path='/skills' component={Skills} />
                            <Route exact path='/education' component={Education} />
                            <Route exact path='/contact' component={Contact} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            )} />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
