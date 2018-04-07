import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import request from './request'

class App extends Component {
  state = {
    message: '',
  }

  ping = () => {
    request('/ping')
      .then(payload => {
        this.setState({
          message: payload,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.ping}>Ping</button>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default App
