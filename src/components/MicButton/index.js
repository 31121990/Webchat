import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const MicButton = ({sendMessage, preferences, value}) => (
    <div
        className="RecastSendButtonContainer"
    >
        <div
            className="RecastSendButton"
            onClick={sendMessage}
            disabled={!value}
        >
            <Text text="MicBtn" />
			
        </div>
		
    </div>
)

MicButton.propTypes = {
    preferences: PropTypes.object,
    sendMessage: PropTypes.func,
    value: PropTypes.string
}

export default MicButton
