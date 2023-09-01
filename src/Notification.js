import './notify.css';
import settingsicon from './icons/settings.svg';
function Notification(){
    return(
        <div className="notify-container">
            <div className="header">
                <p>Notifications</p>
                <div className="image">
                    <img src={settingsicon} alt="Settings" />
                    <p id="settings">Settings</p>
                </div>
            </div>
            <div className="new-notifications">
                <p>No notifications</p>
            </div>
        </div>
    );
}
export default Notification;