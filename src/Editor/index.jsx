import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
      readOnly: false,
      mode: 'markdown',
    }
  }
  defaults = {
    markdown: '# Heading\n\nSome **bold** and _italic_ text\nBy [Jed Watson](https://github.com/JedWatson)',
    javascript: 'var component = {\n\tname: "react-codemirror",\n\tauthor: "Jed Watson",\n\trepo: "https://github.com/JedWatson/react-codemirror"\n};'
  };

  updateCode (newCode) {
    this.setState((prevState, props) => ({
      code: newCode,
    }));
  }




  render() {

    const options = {
      lineNumbers: true,
      readOnly: this.state.readOnly,
      mode: this.state.mode
    };


    console.log(this.defaults)
    return (
      <div>
      <h1>hi</h1>
        <CodeMirror
          ref="editor"
          value={this.state.code}
          onChange={this.updateCode}
          options={options}
          autoFocus={true}
        />
      </div>
    )
  }
}

export default Editor
