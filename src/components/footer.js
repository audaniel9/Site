import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
      <footer>
        <small>Built with</small> <br />
        <img class="logos" src={'public_assets/react.png'} alt="react"/> &nbsp;
        <img class="logos" src={'public_assets/bootstrap.png'} alt="react"/>
      </footer>
      </div>
    );
  }
}

export default Footer;
