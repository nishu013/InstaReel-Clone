import React from 'react'
import './VideoFooter.css'
import {Button,Avatar} from '@mui/material'
import { Favorite, ModeComment, MoreHoriz, MusicNote, Send } from '@mui/icons-material'
import Ticker from 'react-ticker'
function VideoFooter({channel,song,likes,shares,avaterSrc}){
  return (
    <div className='videoFooter'>
      <div className="videoFooter__text">
      <Avatar src={avaterSrc}/>
      <h3>
        {channel}.<Button>Follow</Button>
      </h3>
            </div>
            <div className="videoFooter__ticker">
              <MusicNote className="videoFooter__icon"/>
              <Ticker mode="smooth">
                {({index})=>(
                    <>
                    <h1>{song}</h1>
                    </>
                  )}
              </Ticker>
              </div>           
                     <div className="videoFooter__actions">
              <div className="videoFooter__actionsLeft">
                  <Favorite fontSize='small'/>
                  <ModeComment fontSize='small'/>
                  <Send fontSize='small' />
                  <MoreHoriz fontSize='small' />
              </div>
                <div className="videoFooter__actionsRight">
                <div className="videoFooter__stat">
                  <Favorite fontSize='small'/>
                  <p>{likes}</p>
                </div>
                <div className="videoFooter__stat">
                  <ModeComment fontSize='small'/>
                  <p>{shares}</p>
                </div>
                </div>
              </div>
    </div>
  );
}
export default VideoFooter;
