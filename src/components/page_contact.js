import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div class="jumbotron">
            <h3>Contact</h3>
            <p class="lead">
                Phone: 917-365-8336 <br />
                Email: audaniel9@gmail.com <br /><br />
                <a href="https://github.com/audaniel9/" target="_blank" rel="noopener noreferrer">Github</a> &nbsp;
                <a href="https://www.linkedin.com/in/daniel-au-45422499/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </p> <br />
            <h3>Resume/CV</h3>
            <p><a href="/website/public_assets/resume.pdf" target="_blank">PDF</a></p>
        </div>
      </div>
    );
  }
}

export default Contact;
