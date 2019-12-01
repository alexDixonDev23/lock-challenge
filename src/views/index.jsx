import React, { Component } from 'react';
import Header from '../components/Header';
import Devices from './Devices';
import Users from './Users';

class App extends Component {
  state = {
    devices: true,
    users: false
  }

  toggle = val => {
    val === 'devices' ?
    this.setState({ devices: true, users: false }) :
    this.setState({ devices: false, users: true })
  }

  render(){
    const { devices, users } = this.state;
    return (
      <div>
        <div className="container">
          <Header toggle={this.toggle} />
          {devices && <Devices />}
          {users && <Users />}
        </div>
      </div>
    )
  }
}

export default App;
