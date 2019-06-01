import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header class="display-1">Daniel Au</header>
        <header class="display-4">Software Engineer</header>
        <img class="selfpic" src={'public_assets/selfpic.jpg'} alt="selfpic"/>
      </div>
    );
  }
}

export default Header;
