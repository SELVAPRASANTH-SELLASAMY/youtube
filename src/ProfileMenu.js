import './profilemenu.css';
import profile from './icons/your-channel.svg';
import ytstudio from './icons/studioforprofile.svg';
import swacc from './icons/switchaccount.svg';
import sout from './icons/signout.svg';
import pm from './icons/dollar.svg';
import dataicon from './icons/shield.svg';
import appear from './icons/appearance.svg';
import lang from './icons/lang.svg';
import restrict from './icons/restrict.svg';
import loc from './icons/globe.svg';
import kb from './icons/keyboard.svg';
import set from './icons/settings.svg';
import help from './icons/help.svg';
import fb from './icons/feedback.svg';
function ProfileMenu(){
    const sett=[
        {'Name':"Your cahnnel",'icon':profile},
        {'Name':"YouTube Studio",'icon':ytstudio},
        {'Name':"Switch account",'icon':swacc},
        {'Name':"Sign out",'icon':sout}
    ];
    const mem=[
        {'Name':'Purchases and memberships','icon':pm},
        {'Name':'Your data in youtube','icon':dataicon}
    ];
    const conf=[
        {'Name':"Appearance: Light",'icon':appear},
        {'Name':"Language: English",'icon':lang},
        {'Name':"Restricted Mode: Off",'icon':restrict},
        {'Name':"Location: India",'icon':loc},
        {'Name':"Keyboard shortcuts",'icon':kb}
    ];
    return(
        <div className="profile-container">
            <div className="user">
                <canvas></canvas>
                <div className="inform">
                    <p id="name">Name</p>
                    <p id="uname">@Username</p>
                    <a href="#">Manage your Goolge Account</a>
                </div>
            </div>
            <div className="account-control">
                {
                    sett.map((obj)=>(
                        <div className="schema">
                            <img src={obj.icon} alt={obj.Name} />
                            <p>{obj.Name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="data">
                {
                    mem.map((obj)=>(
                        <div className="schema">
                            <img src={obj.icon} alt={obj.Name} />
                            <p>{obj.Name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="appconfig">
                {
                    conf.map((obj)=>(
                        <div className="schema">
                            <img src={obj.icon} alt={obj.Name} />
                            <p>{obj.Name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="settings">
                <div className="schema">
                    <img src={set} alt="settings" />
                    <p>Settings</p>
                </div>
            </div>
            <div className="hs">
                <div className="schema">
                    <img src={help} alt="help" />
                    <p>Help</p>
                </div>
                <div className="schema">
                    <img src={fb} alt="feedback" />
                    <p>Send feedback</p>
                </div>
            </div>
        </div>
    );
}
export default ProfileMenu;