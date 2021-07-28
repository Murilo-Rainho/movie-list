import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <hr></hr>
        <h2>Trybe web developer course's project</h2>
        <h2>Developed by Murilo Rainho</h2>
        <ul>
          <li><a
            href="https://wa.me/5518996381996"
            target="_blank"
            rel="noreferrer"><img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
              alt="WhatsApp Logo"
              width="40px" /></a></li>
          <li><a
            href="mailto:murilorainho01@gmail.com?subject=Gostaria de me contratar?"
            target="_blank"
            rel="noreferrer"><img
              src="https://s2rio.com.br/wp-content/uploads/2016/11/gmail-logo-704x704.png"
              alt="Gmail Logo"
              width="40px" /></a></li>
          <li><a
            href="https://github.com/Murilo-Rainho/"
            target="_blank"
            rel="noreferrer"><img
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              alt="GitHub Logo"
              width="40px" /></a></li>
          <li><a
            href="https://www.linkedin.com/in/murilo-rainho-882071218/"
            target="_blank"
            rel="noreferrer"><img
              src="https://image.flaticon.com/icons/png/512/174/174857.png"
              alt="LinkedIn Logo"
              width="40px" /></a></li>
        </ul>
      </div>
    );
  }
}

export default Footer;
