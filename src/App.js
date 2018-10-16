import React, { Component } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">
          {this.props.children}
        </div>
      </div>

    );
  }
}

export default App;
