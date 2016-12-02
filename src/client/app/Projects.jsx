import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: 0
    };
    this.projectView = this.projectView.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  projectView(project) {
    this.setState({currentProject: project});
  }

  closeModal() {
    this.setState({currentProject: 0});
  }

  overlayIsActive() {

  }

  render() {
    return (
      <div className="projects-container">
        <div className="project-head1">Some project I have worked on: </div>
        <div className="project-name">
          <p>Squirrel</p>
        </div>
        <div className="project-name">
          <p>Flash!</p>
        </div>
        <div className="project" onClick={() => this.projectView(1)}>
          <div className="-p1"></div>
        </div>
        <div className="project" onClick={() => this.projectView(2)}>
          <div className="-p2"></div>
        </div>
        <div className="project-name">
          <p>TickrTaker</p>
        </div>
        <div className="project-name">
          <p>PawME</p>
        </div>       
        <div className="project" onClick={() => this.projectView(3)}>
          <div className="-p3"></div>
        </div>
        <div className="project" onClick={() => this.projectView(4)}>
          <div className="-p4"></div>
        </div> 
      
        {this.state.currentProject === 1 ? (
          <div className="overlay" onClick={this.closeModal}>
            <div className="icon-close">x</div>
            <span className="project-head">SQUIRREL</span>
            <span className="project-des">Web and Desktop application for caching reading materials, allow user to store, read offline, share with friends and browse recommended materials</span>
            <div className="project-stack"><em>Tech Stack: </em>
              <div className="bubble">React</div>
              <div className="bubble">Electron</div>
              <div className="bubble">HTML5</div>
              <div className="bubble">CSS3</div>
              <div className="bubble">Node</div>
              <div className="bubble">Materialize</div>
              <div className="bubble">Redis</div>
              <div className="bubble">MySQL</div>
              <div className="bubble">Webpack</div>
            </div>

            <p><em><u>Demo</u></em></p>
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/P_OJgUrFFLA" frameborder="0" allowfullscreen></iframe>
            </div>
            <span className="project-des">Designed user focused interface with React, Materialize, CSS3 for quick reconciliation. Cached high-demand data with Redis to enhanced performance and reduced database load. Architected a relational database with MySQL and Sequelize for efficient data storage and querying.</span>
            <img className="project-image" src="../img/squirrel-screenshot.png"/>
            <span className="project-des">System Design: Implemented a modular microservice architecture with Docker for enhanced scalability </span>
            <img className="project-image" src="../img/squirrel-system.png"/>
          </div>
          ) : null}
        {this.state.currentProject === 2 ? (
          <div className="overlay" onClick={this.closeModal}>
            <div className="icon-close">x</div>
            <span className="project-head">FLASH!</span>
            <span className="project-des">Location based event planning mobile application</span>
            <div className="project-stack"><em>Tech Stack: </em>
              <div className="bubble">React Native</div>
              <div className="bubble">HTML5</div>
              <div className="bubble">CSS3</div>
              <div className="bubble">Node</div>
              <div className="bubble">MySQL</div>
            </div>
            <img className="project-image" src="../img/flash-linkedin2.jpg"/>
          </div>
          ) : null}
        {this.state.currentProject === 3 ? (
          <div className="overlay" onClick={this.closeModal}>
            <div className="icon-close">x</div>
            <span className="project-head">Tickr</span>
            <span className="project-des">Competing marketplace for time sensitive assets</span>
            <div className="project-stack"><em>Tech Stack: </em>
              <div className="bubble">React</div>
              <div className="bubble">HTML5</div>
              <div className="bubble">CSS3</div>
              <div className="bubble">Node</div>
              <div className="bubble">PostgreSQL</div>
              <div className="bubble">Webpack</div>
            </div>
            <img className="project-image" src="../img/tickr2.png"/>
            <img className="project-image" src="../img/tickr1.png"/>
          </div>
          ) : null}
      </div>
      );
  }
} 

export default Projects; 