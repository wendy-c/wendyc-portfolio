import React from 'react';
import {render} from 'react-dom';

import About from './About.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };

    this.toggleResume = this.toggleResume.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
    this.toggleProjects = this.toggleProjects.bind(this);
    this.toggleContact = this.toggleContact.bind(this);
    this.toggleTitle = this.toggleTitle.bind(this);
  }

  toggleTitle() {
    this.setState({
      current: 0;
      });
  }

  toggleResume() {
    this.setState({
      current: 1
    });
  }

  toggleAbout() {
    this.setState({
      current: 2
    });
  }

  toggleProjects() {
    this.setState({
      current: 3
    });
  }

  toggleContact() {
    this.setState({
      current: 4
    });
  }

  render () {
    console.log(this.state.current, 'what is current');
    return (
      <div className="container">
        <div className="title" onClick={this.toggleTitle}>
          <div className="headers">
            <h1>Wendy Cheung</h1>
            <h3>Software Engineer</h3>
          </div>
          <div className="social-icons">
          </div>
        </div>
        <div className="selection-box">
        <div className="selection -resume" onClick={this.toggleResume}>
          Resume
        </div>
        {this.state.current === 1 ? <Resume /> : null}
        <div className="selection -about" onClick={this.toggleAbout}>
          About
        </div>
        {this.state.current === 2 ? <About /> : null}
        <div className="selection -projects" onClick={this.toggleProjects}>
          Projects
        </div>
        {this.state.current === 3 ? <Projects /> : null}
        <div className="selection -contact" onClick={this.toggleContact}>
          Contact
        </div>
        {this.state.current === 4 ? <Contact /> : null}
        </div>
      </div> 
      );
  }
}

render(<App/>, document.getElementById('app'));
