import React from 'react';

class Resume extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      strong: ['Javascript(ES6)', 'HTML5', 'JQuery', 'CSS3', 'Node/ExpressJS', 'ReactJS', 'AngularJS', 'MySQL', 'API Development', 'Git'],
      experienced: ['React Native', 'Redux', 'Sass', 'D3', 'MongoDB', 'Redis', 'Grunt', 'Gulp', 'Docker', 'Webpack', 'TDD'],
      languages: ['English', 'Cantonese', 'Mandarin'],
      others: ['Photoshop', 'Design Concept', 'Illustration', 'Customer Experience', 'Sales', 'Fashion Design']
    };
    this.bubblize = this.bubblize.bind(this);
  }

  bubblize(array) {
    return array.map(item => {
      return (<div className="bubble">{item}</div>);
    });
  }

  render() {
    return (
      <div className="resume-container">
        <div className="resume-side">
          <h2 className="sub-head">Skills</h2>
          <div className="skills">
            <div className="sub-head2">Programming</div>
            <div className="bubble-case">
            <div className="sub-head3">Strong:</div>
              {this.bubblize(this.state.strong)}
            <div className="sub-head3">Experienced:</div>
              {this.bubblize(this.state.experienced)}
            </div>
            <div className="sub-head2">Languages</div>
            <div className="bubble-case">
              {this.bubblize(this.state.languages)}
            </div>
            <div className="sub-head2">Other Skills</div>
            <div className="bubble-case">
              {this.bubblize(this.state.others)}
            </div>
          </div>
        </div>

        <div className="resume-body">

          <h2 className="sub-head">Education</h2>

          <div className="ed-div">
            <div className="sub-head2 -school">Hack Reactor</div>
            <div className="-year">2016</div>
          </div>
            <div className="-program">Advanced Software Engineering Immersive Program</div>


          <div className="ed-div">
            <div className="sub-head2 -school">Academy of Art University</div>
            <div className="-year">2008</div>
          </div>
            <div className="-program">Bachelor of Fine Art in Fashion Design</div>

          <h2 className="sub-head">Work Experience</h2>

            <div className="ed-div">
              <div className="sub-head2 -work">Sonic Automotive</div>
              <div className="-year2">2012-2016</div>
            </div>
            <div className="-program">Internet Sales Manager</div>
            <div>
            <p>Managed and responded to online vehicle inquires traffic, communicated clear information regarding product details, inventory availability, and purchase and lease options</p>
            <p>Delivered a personalized customer experience by understanding specific client needs and providing education to determine the best product choice for the customer</p>
            </div>
            <form method="get" action="img/resume.pdf">
            <button className="download-resume" type="submit">DOWNLOAD RESUME IN PDF</button>
            </form>
        </div>
      </div>
      );
  }
}

export default Resume;