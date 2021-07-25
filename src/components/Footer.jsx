import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <h2>Trybe web developer course project</h2>
        <h2>Developed by Murilo Rainho</h2>
        <ul>
          <li><a 
            href="https://wa.me/5518996381996"
            target="_blank" 
            rel="noreferrer"><img 
              src="images/logo_whatsapp.png" 
              alt="WhatsApp Logo" 
              width="40px" /></a></li>
          <li><a 
            href="mailto:murilorainho01@gmail.com?subject=Gostaria de me contratar?"
            target="_blank" 
            rel="noreferrer"><img 
              src="images/logo_gmail.png" 
              alt="Gmail Logo" 
              width="40px" /></a></li>
          <li><a 
            href="https://github.com/Murilo-Rainho/" 
            target="_blank" 
            rel="noreferrer"><img 
              src="images/logo_github.png" 
              alt="GitHub Logo" 
              width="40px" /></a></li>
          <li><a 
            href="https://www.linkedin.com/in/murilo-rainho-882071218/" 
            target="_blank" 
            rel="noreferrer"><img src="images/logo_linkedin.png" alt="LinkedIn Logo" width="40px" /></a></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
