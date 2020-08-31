import React from 'react';
import menu from '../assets/menu.svg';
import fastforward from '../assets/fast_forward.svg';
import play_pause from '../assets/play_pause.svg';
import rewind from '../assets/rewind.svg';
function Wheels(props)
{
    const {handleClick,handleShowMenu, handlePlayPause,zingarea } = props;
    return(
        <div className="buttons-container" id="container">
              <div className="buttons" id="object" onMouseOver={zingarea}>
                <div className="inner-disk" onClick={handleClick}></div>
                    <img src={menu} className="menu" onClick={handleShowMenu} alt="" />
                    <img src={play_pause} className="play_pause" alt="" onClick={handlePlayPause} />
                    <img src={fastforward} className="fastforward" alt="" />
                    <img src={rewind} className="rewind" alt="" />
                </div>
            </div>
    )
}
export default Wheels;