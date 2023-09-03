import './css/video.css';
function Video(){
    return(
        <div className="player">
            <div className="video-container">
            <div className="thumbnail">

            </div>
            <div className="informations">
                <div className="logo-container">
                    <div className="channel-logo"></div>
                </div>
                <div className="video-contents">
                    <div className="video-details">
                        <div className="video-informations">
                            <div className="text"></div>
                        </div>
                    </div>
                    <div className="channel-info">
                        <div className="channel-text"></div>
                    </div>
                    <div className="views">
                        <div className="view-count">
                            <div className="channel-text1"></div>
                        </div>
                        <div className="point"></div>
                        <div className="date">
                            <div className="channel-text1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Video;