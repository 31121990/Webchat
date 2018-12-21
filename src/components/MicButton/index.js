import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const SendButton = ({sendMessage, preferences, value}) => (
    <div
        className="RecastSendButtonContainer"
    >
        <div
            className="RecastSendButton"
            onClick={sendMessage}
            disabled={!value}
        >
            <svg
                style={{
                    width: 43                   
                }}
                viewBox="0 0 512 512"
            >
                  
            </svg>
			
        </div>
		
    </div>
)

SendButton.propTypes = {
    preferences: PropTypes.object,
    sendMessage: PropTypes.func,
    value: PropTypes.string
}

export default SendButton
