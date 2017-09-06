import React, { Component } from 'react'
import './App.css'
import Editor from './Editor'
import HTMLPreview from './HTMLPreview'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Editor /> */}
        <HTMLPreview />
      </div>
    );
  }
}

export default App;
