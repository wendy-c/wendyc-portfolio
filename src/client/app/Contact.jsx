import React from 'react';

const Contact = (props) => {
  return (
    <div className="contact-container">
      <h2>Say Hi!</h2>
      <p>hi@wendycheung.me  |  415-519-5074</p>
      <br />
      <div className="contact-icons">
        <a href="http://www.linkedin.com/in/wendywcheung" target="_blank"><img className="icon" src={"../img/linkedin-gray.png"}/></a>
        <a href="https://github.com/wendy-c" target="_blank"><img className="icon" src={"../img/github-gray.png"}/></a>
        <a href="https://www.instagram.com/wendyc___/?ref=badge" target="_blank"><img className="icon" src={"../img/insta-gray.png"}/></a>
      </div>
    </div>
    );
}

export default Contact;