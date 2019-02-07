import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
        <nav>
            <ul class="nav flex-column">
                <li class="nav-item"><Link class="nav-link" to="/aboutme">About Me</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/skills">Skills</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/education">Education</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
                <li class="nav-item"><Link class="nav-link" to="/connect">Connect</Link></li>
            </ul>
        </nav>
    );
  }
}

export default Nav;
