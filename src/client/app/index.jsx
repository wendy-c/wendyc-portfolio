import React from 'react';
import {render} from 'react-dom';
import {combineReducers} from 'redux';
import {Provider} from 'react-redux';

import {createStore, renderDevTools} from '../utils/devTools';

import * as reducers from '../reducers';

import About from './About.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAbout: true,
      isResume: true,
      isProjects: true,
      isContact: true
    };
  }

  render () {
    return (
      <div className="container">
        <h3>Wendy Cheung</h3>
        <h5>Software Engineer</h5>
        <div>
          <About/>
        </div>
        <div>
          <Resume/>
        </div>
        <div>
          <Projects/>
        </div>
        <div>
          <Contact/>
        </div>
      </div>
      );
  }
}

render(<App/>, document.getElementById('app'));
