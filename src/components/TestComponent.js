import React from 'react'
import PropTypes from 'prop-types'

let TestComponent = ({ data, doRequest }) => 
    <div>
        <button type="button" onClick={e => {
            e.preventDefault()
            doRequest()
        }}>Make Request</button>
        <p>{data}</p>
    </div>

TestComponent.propTypes = {
    data: PropTypes.string, // <<<<<<<<<<<<<<<<<<<<<< NEED TO BE CHANGED ...
    doRequest: PropTypes.func.isRequired
}

export default TestComponent