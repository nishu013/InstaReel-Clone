import React, { useRef, useState } from 'react'
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css'

function VideoCard({url,likes,shares,channel,avaterSrc,song}) {
  const [isVideoPlaying,setIsVideoPlaying]=useState(false);
  const videoRef=useRef(null);
  const onVideoPress=()=>{
    if(isVideoPlaying)
    {
      //stop
      videoRef.current.pause();
      setIsVideoPlaying(false);
        
    }
    else{
      //play
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  }
  return (
    <div className='videoCard'>
      <VideoHeader/>
    <video  ref={videoRef} onClick={onVideoPress} className="videoCard__player" src={url} alt="IG Reel Video" loop />
    <VideoFooter
    likes={likes}
    channel={channel}
    avaterSrc={avaterSrc}
    song={song}
    shares={shares}
    />
    </div>
  )
}

export default VideoCard