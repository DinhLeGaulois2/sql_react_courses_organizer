import React from 'react'
import PropTypes from 'prop-types'

let TestComponent = ({ doRequest }) => 
    <div>
        <button type="button" onClick={e => {
            e.preventDefault()
            doRequest()
        }}>Make Request</button>
    </div>

TestComponent.propTypes = {
    doRequest: PropTypes.func.isRequired
}

export default TestComponent