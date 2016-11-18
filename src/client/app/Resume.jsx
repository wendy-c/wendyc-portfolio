import React from 'react';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strong: ['Javascript(ES6)', 'HTML5', 'JQuery', 'CSS3', 'Node/ExpressJS', 'ReactJS', 'AngularJS', 'MySQL', 'Git'],
      experienced: ['React Native', 'Redux', 'Sass', 'D3', 'MongoDB', 'Redis', 'Grunt', 'Gulp', 'Docker', 'Webpack', 'TDD'],
      languages: ['English', 'Cantonese', 'Mandarin'],
      others: ['Photoshop', 'Design Concept', 'Sketching', 'Customer experience', 'Apparel Pattern Drafting', 'Sewing', '7th Grade Piano', 'Ukulele']
    };
    this.bubblize = this.bubblize.bind(this);
  }

  bubblize(array) {
    return array.map(item => {
      return (<span className="bubble">{item}</span>);
    });
  }

  render() {
    return (
      <div className="resume-container">
        <div className="resume-side">
          <h2 className="sub-head">Skills</h2>
          <div className="skills">
            <h3><em>Programming</em></h3>
            <div className="bubble-case">
              <div>{this.bubblize(this.state.strong)}{this.bubblize(this.state.experienced)}</div>
            </div>
            <h3><em>Languages</em></h3>
            <div className="bubble-case">
              <div>{this.bubblize(this.state.languages)}</div>
            </div>
            <h3><em>Other Skills</em></h3>
            <div className="bubble-case">
              <div>{this.bubblize(this.state.others)}</div>
            </div>
          </div>
        </div>
        <div className="resume-body">
          <h2 className="sub-head">Education</h2>
          <div>
            <h4>Hack Reactor</h4>
            <em>2016</em>
            <p>Advanced Software Engineering Immersive Program</p>
          </div>
          <div>
            <h4>Academy of Art University</h4>
            <em>2008</em>
            <p>Bachelor of Fine Art in Fashion Design</p>
          </div>
          <h2 className="sub-head">Work Experience</h2>
        </div>
      </div>
      );
  }
}

export default Resume;