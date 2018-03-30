import React from 'react'
import { connect } from 'react-redux'

import testAction from '../actions/testAction'
import TestComponent from '../components/TestComponent'

const mapStateToProps = (state) => ({
    data: state.test.data
})

const mapDispatchToProps = (dispatch) => ({
    doRequest: () => { dispatch(testAction.testAPIRequest()) },
})

// You have to connect() to any reducers that you wish to connect to yourself
const TestContainer = connect(
    null,
    // mapStateToProps,
    mapDispatchToProps
)(TestComponent)

export default TestContainer

