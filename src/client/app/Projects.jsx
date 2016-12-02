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
        <div className="project-head">PROJECTS</div>
        <div className="project" onClick={() => this.projectView(1)}>
          <div className="-p1"></div>
        </div>
        <div className="project" onClick={() => this.projectView(2)}>
          <div className="-p2"></div>
        </div>
        <div className="project" onClick={() => this.projectView(3)}>
          <div className="-p3"></div>
        </div>
        <div className="project" onClick={() => this.projectView(4)}>
          <div className="-p4"></div>
        </div>
        <div className="project" onClick={() => this.projectView(5)}>
          <div className="-p5"></div>
        </div>
        <div className="project" onClick={() => this.projectView(6)}>
          <div className="-p6"></div>
        </div>
      
        {this.state.currentProject === 1 ? (
          <div className="overlay" onClick={this.closeModal}>
            <div className="icon-close" onClick={this.closeModal}>X</div>
            <span className="project-head">SQUIRREL</span>
            <span className="project-des">Web and Desktop application to cache reading materials</span>
            <div className="project-stack"><em>Tech Stack: </em>
              <div className="bubble">React</div>
              <div className="bubble">HTML5</div>
              <div className="bubble">CSS3</div>
              <div className="bubble">Node</div>
              <div className="bubble">Materialize</div>
              <div className="bubble">Redis</div>
              <div className="bubble">MySQL</div>
              <div className="bubble">Webpack</div>
            </div>
            <div className="video">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/P_OJgUrFFLA" frameborder="0" allowfullscreen></iframe>
            </div>
            <span className="project-des">System Design: Implemented a modular microservice architecture with Docker for enhanced scalability </span>
            <img className="project-image" src="../img/squirrel-system.png"/>
          </div>
          ) : null}
        {this.state.currentProject === 2 ? (
          <div className="overlay" onClick={this.closeModal}>
            <div className="icon-close" onClick={this.closeModal}>X</div>
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
            <div className="icon-close" onClick={this.closeModal}>X</div>
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