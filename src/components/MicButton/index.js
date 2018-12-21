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
		<img src="../robot_icon.PNG"></img>
           <svg height="30" width="200">
		   
  <text x="0" y="15" fill="red">Micbtn</text>
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
