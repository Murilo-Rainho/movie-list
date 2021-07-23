import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>Trybe web developer course project</h2>
        <h2>Developed by Murilo Rainho</h2>
        <ul>
          <li>Cel: +55 (18) 99638-1996</li>
          <li>murilorainho01@gmail.com</li>
          <li><a 
            href="https://github.com/Murilo-Rainho/" 
            target="_blank" 
            rel="noreferrer">My GitHub</a></li>
          <li><a 
            href="https://www.linkedin.com/in/murilo-rainho-882071218/" 
            target="_blank" 
            rel="noreferrer">My LinkedIn</a></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
