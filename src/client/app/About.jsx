import React from 'react';

const About = (props) => {
  return (
    <div>
      <div>
        <img className="profile-pic" src={"../img/profile.jpg"}/>
      </div>
      <div className="bio">
        <p>
          I am a software engineer and a high energy individual with a growth mindset. My passion is in building Javascript applications that solve real world problems and make the world a better place. As someone with a good eye in design and strong intuition in user experience, I have a particular love for optimizing my work to achieve seamless experience for users.</p>
        <p>When I was 15, I left my home town Hong Kong and moved to Sydney on my own to attend a boarding school. After that, I found my favorite city, San Francisco and decided to become a citizen.</p>
        <p>In my spare time, I enjoy checking out national parks with my two poodles, attending music festivals and playing ukulele next to a bonfire with friends. My favorite food is pancakes.</p>
      </div>
    </div>
    );
};

export default About;