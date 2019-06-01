import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="Header" class=" text-center">
        <header class="display-1 pt-5">Daniel Au</header>
        <header class="display-4">Software Engineer</header>
        <img class="selfpic m-5" src={'public_assets/selfpic.jpg'} alt="selfpic"/>
      </div>
    );
  }
}

export default Header;
