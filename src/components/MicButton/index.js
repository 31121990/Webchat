import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const SendButton = ({sendMessage, preferences, value}) => (
    <div
        className="RecastSendButtonContainer"
    >
	<div>
	<img src="svgs/robot_icon.PNG" height="10px"/>
)

SendButton.propTypes = {
    preferences: PropTypes.object,
    sendMessage: PropTypes.func,
    value: PropTypes.string
}

export default SendButton
