import './App.css';
import logo from './icons/youtube-logo.svg';
import hamburger from './icons/hamburger.svg';
import search from './icons/search-icon.svg';
import mic from './icons/microphone.svg';
import create from './icons/create.svg';
import notify from './icons/notify.svg';
import profile from './icons/profile.svg';
import React,{useState} from 'react';
import Left from './Leftelement';
import ProMenu from './ProfileMenu';
import Notify from './Notification';
import Crt from './Create';
import Suggesstions from './Suggesstions';
import Body from './playerbody';
function Menu()
{
    const [show,setShow]=useState(false);
    const [disp,setDisp]=useState(false);
    const [ntfCenter,showNtf]=useState(false);
    const [crtMenu,showCrt]=useState(false);
    let [Mic,clicked]=useState(false);
    const MicAnimate={
        animationName: Mic ? 'alexa' : null,
        animationDuration: '1s',
        animationIterationCount:'5',
        animationTimingFunction: 'linear'
    };
    const [sgstbar,setMove]=useState(false);
    const [videoplayer,setmovement]=useState(false);
    return(
        <>
        <div className="top-menu">
            <div className="menu">
                <div onClick={()=>{setShow(!show); setMove(!sgstbar);setmovement(!videoplayer)}} className="hamburger-menu">
                    <img src={hamburger} alt="hamburger-icon" />
                </div>
                <div className="youtube-logo">
                    <p className="tm">IN</p>
                    <img src={logo} alt="youtube" />
                </div>
                <div className="search">
                    <input type="text" placeholder="Search"/>
                    <div className="search-icon-onfocus">
                        <img src={search} alt="search-icon" />
                    </div>
                    <div className="search-icon">
                        <img src={search} alt="search-icon" />
                        <p className="what-is-it">Search</p>
                    </div>
                    <div onMouseDown={()=>{clicked(false)}} onClick={()=>clicked(true)} style={MicAnimate} className="microphone">
                        <img src={mic} alt="voice-search" />
                        <p className="what-is-it">Search with your voice</p>
                    </div>
                </div>
                <div className="right-corner-menu">
                        <div className="create">
                            <img onClick={()=>{showCrt(!crtMenu)}} src={create} alt="create" />
                            <p className="what-is-it">Create</p>
                            {crtMenu?<Crt/>:null}
                        </div>
                        <div className="notify">
                            <p onClick={()=>{showNtf(!ntfCenter)}} className="notification-count">1</p>
                            <img onClick={()=>{showNtf(!ntfCenter)}} src={notify} alt="notifications" />
                            <p className="what-is-it">Notifications</p>
                            {ntfCenter?<Notify/>:null}
                        </div>
                        <div onClick={()=>{setDisp(!disp)}} className="profile">
                            <img src={profile} alt="profile" />
                        </div>
                </div>
            </div>
        </div>
        <div className="leftSidemenu">
            {show?<Left/>:null}
            <div className={`${sgstbar ? "sgst" : ''}`}>
                <Suggesstions/>
                <Body/>
            </div>
        </div>
        <div className="profileMenu">
           {disp?<ProMenu/>:null}
        </div>
        </>
    );
}
export default Menu;