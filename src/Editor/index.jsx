import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as selectors from '../store/selectors.js'
import * as actionCreators from '../store/actions'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/lib/codemirror.css'
import * as ku from '../lib/ke-utils'

class Editor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }


  render() {
    const { updateCode } = this.props

    const handleUpdateCode = (newCode) => {
      ku.log('newCode', newCode, 'blue')
      updateCode(newCode)
    }
    const options = {
      lineNumbers: true,
      mode: 'javascript'
    };
    console.log('render', '', 'blue')
    return (
      <div>
        <h1>Code Editor</h1>
        <CodeMirror
          ref="editor"
          value={this.props.code}
          onChange={handleUpdateCode}
          options={options}
          autoFocus={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  code: selectors.getCode(state)
})

export default connect(mapStateToProps, actionCreators)(Editor)
