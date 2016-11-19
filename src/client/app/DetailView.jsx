import React from 'react';
import About from './About.jsx';
import Resume from './Resume.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: null,
      about: 'A',
    };
    this.getView = this.getView.bind(this);
    this.checkProps = this.checkProps.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  getView() {
    console.log(this.state.menu);
    if (this.state.menu === null) {
      return this.checkProps();
    } else {
      if (this.state.menu === 1) {
        return (<About />);
      } else if (this.state.menu === 2) {
        return (<Resume />);
      } else if (this.state.menu === 3) {
        return (<Projects/>);
      } else {
        return (<Contact/>);
      }
    }
  }

  checkProps() {
    if (this.props.current === 1) {
      return (<About />);
    } else if (this.props.current === 2) {
      return (<Resume />);
    } else if (this.props.current === 3) {
      return (<Projects/>);
    } else {
      return (<Contact/>);
    }
  }

  toggleMenu(value) {
    this.setState({
      menu: value
    });
  }

  render() {
    const view = this.getView();
    console.log(this.state.about);
    return (
      <div className="detail-view">
        <div className="side-menu">
          <div className="menu-btn" data-hover="ABOUT" onClick={() => this.toggleMenu(1)}><span>A</span></div>
          <div className="menu-btn" data-hover="RESUME" onClick={() => this.toggleMenu(2)}><span>R</span></div>
          <div className="menu-btn" data-hover="PROJECTS" onClick={() => this.toggleMenu(3)}><span>P</span></div>
          <div className="menu-btn" data-hover="CONTACT" onClick={() => this.toggleMenu(4)}><span>C</span></div>
        </div>
        <div className="main-body">
          {view}
        </div>
      </div>
      );
  }
}

export default DetailView;