import React from 'react';
import {render} from 'react-dom';

import About from './About.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import DetailView from './DetailView.jsx';
import MobileView from './MobileView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0,
      hamburger: false
    };

    this.checkView = this.checkView.bind(this);
    this.toggleCurrent = this.toggleCurrent.bind(this);
  }

  componentWillMount() {
    const size = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    console.log('what size?', size);
    if (size < 667) {
      this.setState({
        current: 5
      });
    }
  }

  toggleCurrent(value) {
    this.setState({
      current: value
    });
  }

  checkView() {
    if (this.state.current === 0) {
      return (
        <div className="selection-box">
          <div className={this.state.current === 1 ? "selection -bk1-hover selection-hover" : "selection -bk1"} onClick={() => this.toggleCurrent(1)}>
            <span>ABOUT</span>
          </div>
          <div className={this.state.current === 2 ? "selection -bk2 selection-hover" : "selection -bk2"} onClick={() => this.toggleCurrent(2)}>
            <span>RESUME</span>
          </div>
          <div className={this.state.current === 3 ? "selection -bk3 selection-hover" : "selection -bk3"} onClick={() => this.toggleCurrent(3)}>
            <span>PROJECTS</span>
          </div>
          <div className={this.state.current === 4 ? "selection -bk4 selection-hover" : "selection -bk4"} onClick={() => this.toggleCurrent(4)}>
            <span>CONTACT</span>
          </div>
        </div>
        );
    } else if (this.state.current === 5) {
      <MobileView />
    } else {
      return (
        <DetailView current={this.state.current}/>
        );
    }
  }

  render () {
    const puzzleView = this.checkView();
    console.log('hmm current at?', this.state.current);
    return (
      <div className="container">
        <div className="title" onClick={() => this.toggleCurrent(0)}>
          <div className="headers">
            <h1>Wendy Cheung</h1>
            <h3>Software Engineer | San Francisco Bay Area</h3>
          </div>
          <div className="social-icons">
            <a href="http://www.linkedin.com/in/wendywcheung" target="_blank"><img className="icon" src={"../img/linkedin-gray.png"}/></a>
            <a href="https://github.com/wendy-c" target="_blank"><img className="icon" src={"../img/github-gray.png"}/></a>
            <a href="https://www.instagram.com/wendyc___/?ref=badge" target="_blank"><img className="icon" src={"../img/insta-gray.png"}/></a>
          </div>

            <div className="hamburger-container" onClick={() => this.setState({hamburger: !this.state.hamburger})}>
            <div className="hamburger-btn"></div>
            </div>
            {this.state.hamburger ? (
              <div>
                <ul className="hamburger-menu">
                  <li className="dropdown line" onClick={() => this.toggleCurrent(1)}>About</li>
                  <li className="dropdown line" onClick={() => this.toggleCurrent(2)}>Resume</li>
                  <li className="dropdown line" onClick={() => this.toggleCurrent(3)}>Projects</li>
                  <li className="dropdown" onClick={() => this.toggleCurrent(4)}>Contact</li>
                </ul>
              </div>
            ) : null}

        </div>
        {puzzleView}
        <div className="mobile-view">hi mobile, responsive version in progress</div>
      </div> 
      );
  }
}

render(<App/>, document.getElementById('app'));
