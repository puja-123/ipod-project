import React from 'react';
import battery from '../assets/battery.svg';
import playIcon from '../assets/play.svg';
import pauseIcon from '../assets/pause.svg';
import candycrush from '../assets/games/candycrush.jpeg';
function MainList2(props)
{
    const { coverflow, music, games, settings, track, playingStatus, play } = props;
    return (
//  Inverse of MainList Container, that is this div work in opposite manner, when MainList div is working it will be none 
// and when that becomes none , this will work
        <div className="cont">
            <div className={`${coverflow || music ? "mp" : "rm"}`}>
                
                <div className="notification-panel2">
                    <span className="noty-text">Now Playing</span>
                    <span className="battery2">
                        <img src={battery} alt="battery" className="bat" />
                    </span>
                    <span className={`${playingStatus ? "" : "rm"}`}>
                        <span className={`${play ? "battery2" : "rm"}`}>
                            <img src={playIcon} alt="play" className="bat" />
                        </span>
                        <span className={`${play ? "rm" : "battery2"}`}>
                            <img src={pauseIcon} alt="pause" className="bat" />
                        </span>
                    </span>
                </div>
                <div className="content">
                    <div className="thumbnail">
                        <img src={track.artwork} alt=""></img>
                    </div>
                    <div className="description">
                        <div className="songName">
                            {track.name}
                        </div>
                        <div >{track.album}</div>
                        <div className="artist"> <span>Artists:</span> 
                            {track.artist}
                        </div>
                    </div>
                </div>  
                <div className="player">
                    <audio>
                        <source src={track.source}></source>
                    </audio>
                    <span className="timer" id="song_id" data="0">0.00</span>
                    <div className="fillup" id="fill" width="0"></div>
                    <span className="time">3:13</span>
                </div>
            </div>


                {/* -------------------------------------------------------------------------- */}
                {/* games */}
            <div className={`${games ? "gm" : "rm"}`}>
                <img src={candycrush} alt=""></img>
            </div>

                {/* -------------------------------------------------------------------------- */}
                {/* settings */}
            <div className={`${settings ? "setting" : "rm"}`}>
                <div className="text">
                    <div>Get In Touch With me on LinkedIn </div>
                  <a href="https://www.linkedin.com/in/puja-kumari-196708156/">Puja Kumari</a>
                </div>
            </div>
        </div>
    )           
}
export default MainList2;