import React from 'react'
import './VideoHeader.css'
import { ArrowBackIos } from '@mui/icons-material'
import { CameraAltOutlined } from '@mui/icons-material'
function VideoHeader() {
  return (
        <div className="videoHeader">
            <ArrowBackIos/>
            <h3>Reels</h3>
            <CameraAltOutlined/>
        </div>
  )
}

export default VideoHeader