
import { useEffect,useState } from 'react';
import './App.css';
import VideoCard from './VideoCard';
import db from './firebase';

function App() {
  const [reels, setReels] = useState([])

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])
  return (
    <div className="app">
      <div className="app__top">
    
    <img className="app__logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/150px-Instagram_logo_2022.svg.png' alt=''/>
    <h1>Reels</h1>
    {/* reel logo*/}
    {/* text */}
      </div>
    
    
    <div className="app__videos">
      {reels.map(({channel,avaterSrc,song,url,likes,shares})=>(
    <VideoCard
    channel={channel}
    avaterSrc={avaterSrc}
    song={song}
    url={url}
    likes={likes}
    shares={shares}
    />
    ))}
  
    </div>
    
    
    
    </div>
  );
}

export default App;
