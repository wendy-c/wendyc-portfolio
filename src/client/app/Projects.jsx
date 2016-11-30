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
        <div className="project" onClick={() => this.projectView(1)}>
          <div className="-p1"></div>
        </div>
        <div className="project" onClick={() => this.projectView(2)}>
          <div className="-p2"></div>
        </div>
        <div className="project -p3"></div>
      
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
            <img className="project-image" src="../img/flash-linkedin2.jpg"/>
          </div>
          ) : null}
        {this.state.currentProject === 2 ? (
          <div className="overlay" onClick={this.closeModal}>
            <div className="icon-close" onClick={this.closeModal}>X</div>
            <span className="project-head">FLASH!</span>
            <span className="project-des">Location based event planning mobile app</span>
            <img className="project-image" src="../img/flash-linkedin2.jpg"/>
          </div>
          ) : null}
      </div>
      );
  }
} 

export default Projects; 