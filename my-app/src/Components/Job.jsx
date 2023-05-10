import React, { useState } from 'react';
import style from "../Style/VideoPlayer.module.css"
import {MdOutlineOndemandVideo} from "react-icons/md"
import {TbPlayerTrackNextFilled} from "react-icons/tb";
import {TbPlayerTrackPrevFilled} from "react-icons/tb";
import {TbPlayerPlayFilled} from "react-icons/tb";
import {TbPlayerPause} from "react-icons/tb"

const Job = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlistIndex, setPlaylistIndex] = useState(0);
  const playlist = [
    {
      id: 1,
      title: 'Job Interview Conversation ',
      url: 'https://www.youtube.com/embed/-2UHU93KF9k',
    },
    {
      id: 2,
      title: 'Job interview ',
      url: 'https://www.youtube.com/embed/0k0Uc9uAJwk',
    },
    {
      id: 3,
      title: 'Tell Me About Yourself',
      url: 'https://www.youtube.com/embed/ACiNC1T0Et0',
    },
    {
      id: 4,
      title: 'How To Be Confident In Interviews',
      url: 'https://www.youtube.com/embed/wBJ0MUkA1cA',
    },
    {
      id: 5,
      title: 'Interview technique tips and body language',
      url: 'https://www.youtube.com/embed/GfRznjzWxJg',
    },
    {
        id: 6,
        title: 'Why Should we hire you?',
        url: 'https://www.youtube.com/embed/qNIZ1FT2hCM',
      },
  ];

  const handlePlayPause = () => {
    setIsPlaying(prevState => !prevState);
  };

  const handleNext = () => {
    setPlaylistIndex(prevIndex => (prevIndex + 1) % playlist.length);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setPlaylistIndex(prevIndex => (prevIndex - 1 + playlist.length) % playlist.length);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePlaylistClick = (index) => {
    setPlaylistIndex(index);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  return (
    <div style={{display:"block", width: '100%'}}>
    <div className={style.cont}>
      <h1>Job Interview </h1>
      <h4>Instructor:-Palak</h4>
    </div>
    <div  className={style.divCont} >
     
      <div className={style.div2}>
        <iframe
          src={playlist[playlistIndex].url + `?start=${currentTime}`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video player"
          width="100%"
          height="515"
        />
        <div className={style.playbtn}>
          <button onClick={handlePrev}><TbPlayerTrackPrevFilled/></button>
          <button onClick={handlePlayPause}>{isPlaying ? <TbPlayerPlayFilled/> : <TbPlayerPause/>}</button>
          <button onClick={handleNext}><TbPlayerTrackNextFilled/></button>
        </div>
      </div> 
      <div  className={style.div3}>
        {playlist.map((video, index) => (
          <div
            key={video.id}
            style={{
              fontSize:"20px",display:"flex",padding:"10px",
              fontWeight: index === playlistIndex ? 'bold' : 'normal',
              backgroundColor: index === playlistIndex ? 'lightgray' : 'white',
              cursor:"pointer"
            }}
            onClick={() => handlePlaylistClick(index)}
          >
            <div className={style.icon}><MdOutlineOndemandVideo/>
            <div className={style.title}> {video.title}</div>
            </div>
          
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Job;