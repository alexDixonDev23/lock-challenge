import React, { Component } from 'react';
import './styles.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      devices: true,
      users: false
    }
  }

  toggle = type => e => {
    type === 'devices' ?
    this.setState({ devices: true, users: false }) :
    this.setState({ devices: false, users: true })

    this.props.toggle(type)
  }

  render(){

    const { devices, users } = this.state;

    const buttonContainer = {
      width: '50%',
      textAlign: 'center'
    }

    return (
      <div className="header-container">
        <div style={buttonContainer}>
          <button
            onClick={this.toggle('devices')}
            className={devices ? "active-button" : "inactive-button"}>
            Devices
          </button>
        </div>
        <div style={buttonContainer}>
          <button
            onClick={this.toggle('users')}
            className={users ? "active-button" : "inactive-button"}>
            Users
          </button>
        </div>
      </div>
    );
  };
};


export default Header;
