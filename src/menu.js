import './css/App.css';
import logo from './icons/youtube-logo.svg';
import hamburger from './icons/hamburger.svg';
import search from './icons/search-icon.svg';
import mic from './icons/microphone.svg';
import create from './icons/create.svg';
import notify from './icons/notify.svg';
import profile from './icons/profile.svg';
import { useState } from 'react';
import LeftMenu from './Leftelement';
import ProfileMenu from './ProfileMenu';
import Notify from './Notification';
import Create from './Create';
import Video from './video';
import Suggesstions from './Suggesstions';
function Menu()
{
    const [MenuBar, showMenu] = useState(false);
    const [profileBar, ShowProfilebar] = useState(false);
    const [notificationBar,ShowNotificationBar]=useState(false);
    const [createBar,ShowCreateBar]=useState(false);
    const [clicked,setClickStatus]=useState(false);
    const anime={
        animationName:clicked?'alexa':null,
        animationDuration:'1s',
        animationIterationCount:5,
        animationTimingFunction:'linear'
    }


    const channels=[
        'Tutor Joe\'s',
        'Kalvium',
        'A2D Tech',
        'Google',
        'Snapdragon india',
        'Funtouch OS',
        'Oh my thagaval',
        'Pudhumai sei',
        'Tamil trekker',
        'Tech boss',
        'Tamil tech',
        'Tutor Joe\'s',
        'Kalvium',
        'A2D Tech',
        'Google',
        'Snapdragon india',
        'Funtouch OS',
        'Oh my thagaval',
        'Pudhumai sei',
        'Tamil trekker',
        'Tech boss',
        'Tamil tech',
        'Tutor Joe\'s',
        'Kalvium',
        'A2D Tech',
        'Google',
        'Snapdragon india',
        'Funtouch OS',
        'Oh my thagaval',
        'Pudhumai sei',
        'Tamil trekker',
        'Tech boss',
        'Tamil tech',
        'Tutor Joe\'s',
        'Kalvium',
        'A2D Tech',
        'Google',
        'Snapdragon india',
        'Funtouch OS',
        'Oh my thagaval',
        'Pudhumai sei',
        'Tamil trekker',
        'Tech boss',
        'Tech boss',
        'Tamil tech'
    ];

    return(
        <div className="Menu-cont">
        <div className="top-menu">
            <div className="menu">
                    <div onClick={()=>showMenu(!MenuBar)} className="hamburger-menu">
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
                    <div onMouseDown={()=>setClickStatus(false)} onClick={()=>setClickStatus(true)} className="microphone" style={anime}>
                        <img src={mic} alt="voice-search" />
                        <p className="what-is-it">Search with your voice</p>
                    </div>
                </div>
                <div className="right-corner-menu">
                        <div className="control-create">
                            <div onClick={()=>{ShowCreateBar(!createBar);ShowNotificationBar(false);ShowProfilebar(false)}} className="create">
                                <img src={create} alt="create" />
                                {createBar?null:<p className="what-is-it">Create</p>}
                            </div>
                            <div className="create-bar">
                                {createBar?<Create/>:null}
                            </div>
                        </div>
                        <div className="controlNotification">
                            <div onClick={()=>{ShowNotificationBar(!notificationBar);ShowCreateBar(false);ShowProfilebar(false)}} className="notify">
                                <p className="notification-count">1</p>
                                <img src={notify} alt="notifications" />
                                {notificationBar?null:<p className="what-is-it">Notifications</p>}
                            </div>
                            <div className="notification-bar">
                                {notificationBar?<Notify/>:null}
                            </div>
                        </div>
                        <div onClick={() => {ShowProfilebar(!profileBar);ShowCreateBar(false);ShowNotificationBar(false)}} className="profile">
                            <img src={profile} alt="profile" />
                        </div>
                        {profileBar ? <ProfileMenu /> : null}
                </div>
                </div>
            </div>
            {
                MenuBar ? <LeftMenu /> : null
            }
            <div className="suggesstion-area">
                <Suggesstions/>
            </div>
            <div className="video-display-area">
                {
                    channels.map((ch)=>(
                        <Video/>
                    ))
                }
            </div>
        </div>
    );
}
export default Menu;