import React from 'react';
import battery from '../assets/battery.svg';
import arrowright from '../assets/arrow_right.svg';
import OnMyWay from '../assets/coverflow/songicon/on_my_way.jpeg';
import icon from '../assets/games/games-icon.png';
import rIcon from '../assets/setting.png';
import playIcon from '../assets/play.svg';
import pauseIcon from '../assets/pause.svg';
function MainList(props)
{
    const { coverflow, music, games, settings, showmenu, playingStatus, play, artist, albums, musicmenu } = props;
    return (
            <div className={`${showmenu ? "inside-screen" : "rm"}`} >
                <div className="menu-list">
                    {/*---------------- Header of screen ---------- */}
                    <div className="notification-panel">
                        <span className="noty-text">iPod.js</span>
                        <span className="battery">
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
                    {/* ----------------- MainList ---------------- */}
                    <div className={`${musicmenu ? "rm" : "list"}`}>
                        <div className={`${coverflow ? "active" : ''}`}>
                            Cover Flow
                            <span><img src={arrowright} alt="right"></img></span>
                        </div>
                        <div className={`${music ? "active" : ''}`}>
                            Music
                            <span><img src={arrowright} alt="right"></img></span>
                        </div>

                        <div className={`${games ? "active" : ''}`}>
                            Games
                            <span><img src={arrowright} alt="right"></img></span>
                        </div>
                        <div className={`${settings ? "active" : ''}`}>
                            Settings
                            <span><img src={arrowright} alt="right" ></img></span>
                        </div>
                    </div>

                    {/* {*---------- SUB-MENU of Music Menu ---------/*} */}
                    <div className={`${musicmenu ? "list" : "rm"}`}>
                        <div className={`${artist ? "active" : ''}`}>
                            Artist
                            <span><img src={arrowright} alt="right"></img></span>
                        </div>
                        <div className={`${albums ? "active" : ''}`}>
                            Album
                            <span><img src={arrowright} alt="right"></img></span>
                        </div>
                    </div>

                </div>
                <div>
                    <div className={`${coverflow || music ? "coverflow" : 'rm'}`} >
                        <img src={OnMyWay} alt="song"></img>
                    </div>
                    <div className={`${games ? "games bg" : 'rm'}`} >
                        <img src={icon} alt=""></img>
                        <div>
                            games
                        </div>
                    </div>
                    <div className={`${settings ? "bg settings" : 'rm'}`} >
                        <img src={rIcon} alt=""></img>
                        <div>iPod.js</div>
                    </div>
                </div>
            </div>
    )
}
export default MainList;