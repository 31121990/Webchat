import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const SendButton = ({ sendMessage, preferences, value }) => (
  <div className="RecastSendButtonContainer">
    <div onClick={sendMessage} disabled={!value} class="circle-wrap circle-wrap--third">
     <svg
        style={{
          width: 33,
          fill: value ? preferences.accentColor : preferences.botMessageColor,
        }}
        viewBox="0 0 512 512"
      >
        <path d="M85 277.375h259.704L225.002 397.077 256 427l171-171L256 85l-29.922 29.924 118.626 119.701H85v42.75z" />
      </svg>
	  
	  /* <svg name="play-button" viewBox="0 0 1000 1000">
    <use class="play-button-circle" xlink:href="#play-button-circle"></use>
    <use class="play-button-triangle" xlink:href="#play-button-triangle"></use>
  </svg>*/
  
    </div>
  </div>
)

SendButton.propTypes = {
  preferences: PropTypes.object,
  sendMessage: PropTypes.func,
  value: PropTypes.string,
}

export default SendButton
