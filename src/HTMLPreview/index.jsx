import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as selectors from '../store/selectors.js'
import * as actionCreators from '../store/actions'
import * as ku from '../lib/ke-utils'

const HTMLPreview = (props) => {
  return (
    <iframe src='<h1>I Frame</h1>'></iframe>
  )
}

export default HTMLPreview

// export default connect(mapStateToProps, actionCreators)(HTMLPreview)
