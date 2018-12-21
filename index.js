import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const MicButton = ({micMessage, preferences, value}) => (
    <div
        className="RecastSendButtonContainer"
    >
        <div
            className="RecastSendButton"
            onClick={micMessage}
            disabled={!value}
        >
		<img width="100" height="20" src="/Rushi/Webchat-master/Webchat-master/src/components/MicButton/robot_icon.png"></img>
           <svg height="30" width="200">
		   
  <text x="0" y="15" fill="red">Micbtn5</text>
</svg>
			
        </div>
		
    </div>
)

MicButton.propTypes = {
    preferences: PropTypes.object,
    micMessage: PropTypes.func,
    value: PropTypes.string
}

export default MicButton
