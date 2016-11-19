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
      current: 0
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
            <h3>Software Engineer | San Francisco Bay Area</h3>
          </div>
          <div className="social-icons">
            <a href="http://www.linkedin.com/in/wendywcheung" target="_blank"><img className="icon" src={"../img/linkedin-gray.png"}/></a>
            <a href="https://github.com/wendy-c" target="_blank"><img className="icon" src={"../img/github-gray.png"}/></a>
            <a href="https://www.instagram.com/wendyc___/?ref=badge" target="_blank"><img className="icon" src={"../img/insta-gray.png"}/></a>
          </div>
        </div>
        <div className="selection-box">
        <div className={this.state.current === 1 ? "selection -bk1 selection-hover" : "selection -bk1"} onClick={this.toggleResume}>
          ABOUT
        </div>
        {this.state.current === 1 ? <Resume /> : null}
        <div className={this.state.current === 2 ? "selection -bk2 selection-hover" : "selection -bk2"} onClick={this.toggleAbout}>
          RESUME
        </div>
        {this.state.current === 2 ? <About /> : null}
        <div className={this.state.current === 3 ? "selection -bk3 selection-hover" : "selection -bk3"} onClick={this.toggleProjects}>
          PROJECTS
        </div>
        {this.state.current === 3 ? <Projects /> : null}
        <div className={this.state.current === 4 ? "selection -bk4 selection-hover" : "selection -bk4"} onClick={this.toggleContact}>
          CONTACT
        </div>
        {this.state.current === 4 ? <Contact /> : null}
        </div>
      </div> 
      );
  }
}

render(<App/>, document.getElementById('app'));
