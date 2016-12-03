import React from 'react';

const About = (props) => {
  return (
    <div>
      <div>
        <img className="profile-pic" src={"../img/profile.jpg"}/>
      </div>
      <div className="bio">
        <p>
          I am a high-energy software engineer with a growth mindset. My passion is leveraging technology to solve real world problems. As someone with a good eye for design and strong intuition in user experience, I have a particular love for crafting simple and delightful interfaces.</p>
        <p>Fun Facts about me:</p>
        <p className="bubble-case1">
        <div className="bubble">Ukulele musician</div>
        <div className="bubble">National Parks explorer</div>
        <div className="bubble">Owner of two toy poodles</div>
        <div className="bubble">Professional Seamstress</div>
        <div className="bubble">7th Grade Piano</div>
        <div className="bubble">Music Festival goer</div>
        <div className="bubble">Pancakes enthusiast</div>
        <div className="bubble">Born in Hong Kong, lived in Sydney</div>
        </p>
      </div>
    </div>
    );
};

export default About;