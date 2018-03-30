import React from 'react'
import PropTypes from 'prop-types'

let TestComponent = ({data, doRequest}) => {
    <button type="button" onClick={e => {
        e.preventDefault()
        doRequest()
    }}>Make Request</button>
}

TestComponent.PropTypes = {
    data: PropTypes.string, // <<<<<<<<<<<<<<<<<<<<<< NEED TO BE CHANGED ...
    doRequest: PropTypes.func.isRequired
}

