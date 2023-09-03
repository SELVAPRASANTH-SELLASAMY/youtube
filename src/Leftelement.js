import './css/App.css';
import home from './icons/home.svg';
import shorts from './icons/shorts.svg';
import sbs from './icons/subscription.svg';
import lib from './icons/library.svg';
import history from './icons/history.svg';
import yv from './icons/your-videos.svg';
import wl from './icons/watch-later.svg';
import lv from './icons/like.svg';
import sm from './icons/down-arrow.svg';
import playlisticon from './icons/playlist.svg';
import trend from './icons/trend.svg';
import shop from './icons/shop.svg';
import mus from './icons/music.svg';
import mov from './icons/Movies.svg';
import liv from './icons/live.svg';
import gam from './icons/gaming.svg';
import news from './icons/news.svg';
import sport from './icons/sports.svg';
import learn from './icons/learning.svg';
import fas from './icons/fashion.svg';
import pre from './icons/premium.svg';
import std from './icons/studio.svg';
import ytmu from './icons/ytmusic.svg';
import kid from './icons/kids.svg';
import settingsicon from './icons/settings.svg';
import rep from './icons/report.svg';
import helpicon from './icons/help.svg';
import feedicon from './icons/feedback.svg';
function Leftelement(){
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
        'Tamil tech'
    ];
    const playLists=[
        'Learning',
        'Hollywood songs',
        'Bootstrap tutorial',
        'Movie',
        'Love songs',
        'Datastructures'
    ];
    const Explore=[
        {'category':'Trending','icon':trend},
        {'category':'Shopping','icon':shop},
        {'category':'Music','icon':mus},
        {'category':'Movies','icon':mov},
        {'category':'Live','icon':liv},
        {'category':'Gaming','icon':gam},
        {'category':'News','icon':news},
        {'category':'Sports','icon':sport},
        {'category':'Learning','icon':learn},
        {'category':'Fashion & Beauty','icon':fas}
    ];
    const More=[
        {'category':'YouTube Premium','icon':pre},
        {'category':'YouTube Studio','icon':std},
        {'category':'YouTube Music','icon':ytmu},
        {'category':'YouTube Kids','icon':kid}
    ];
    const Setup=[
        {'category':'Settings','icon':settingsicon},
        {'category':'Report history','icon':rep},
        {'category':'Help','icon':helpicon},
        {'category':'Send feedback','icon':feedicon}
    ];
    return(
        <div className="container">
            <div className="hss">
                <div className="home">
                    <img src={home} alt="home" />
                    <p className="home-page">Home</p>
                </div>
                <div className="shorts">
                    <img src={shorts} alt="shorts" />
                    <p className="shorts">Shorts</p>
                </div>
                <div className="subscription">
                    <img src={sbs} alt="subscription" />
                    <p>Subscriptions</p>
                </div>
            </div>
            <div className="lhyw">
                <div className="library">
                    <img src={lib} alt="library" />
                    <p className="library">Library</p>
                </div>
                <div className="history">
                    <img src={history} alt="history" />
                    <p>History</p>
                </div>
                <div className="your-videos">
                    <img src={yv} alt="your videos" />
                    <p>Your videos</p>
                </div>
                <div className="watch-later">
                    <img src={wl} alt="watch-later" />
                    <p>Watch later</p>
                </div>
                <div className="liked-videos">
                    <img src={lv} alt="liked videos" />
                    <p>Liked videos</p>
                </div>
                {
                    playLists.map((playlist)=>(
                        <div className="manage-library">
                            <img src={playlisticon} alt="Playlists" />
                            <p>{playlist}</p>
                        </div>
                    ))
                }
                <div className="show-more">
                    <img src={sm} alt="show more" />
                    <p>Show more</p>
                </div>
            </div>
            <div className="subscriptions">
                <div className="subs">
                    <p>Subscriptions</p>
                </div>
                {/* function to handle the subscribed channels */}
                {
                    channels.map((channel)=>(
                        <div className="channel-1">
                            <canvas></canvas>
                            <p>{channel}</p>
                        </div>
                    ))
                }
                <div className="show-more">
                    <img src={sm} alt="show more" />
                    <p>Show more</p>
                </div>
            </div>
            <div className="explore-cont">
                <div className="expl">
                    <p>Explore</p>
                </div>
                {
                    Explore.map((exp)=>(
                        <div className="channel-1">
                            <img src={exp.icon} alt="loading" />
                            <p>{exp.category}</p>
                        </div>
                    ))
                }
            </div>
            <div className="more-from-ytb">
                <div className="more">
                    <p>More from YouTube</p>
                </div>
                {
                    More.map((mr)=>(
                        <div className="channel-1">
                            <img src={mr.icon} alt="loading" />
                            <p>{mr.category}</p>
                        </div>
                    ))
                }
            </div>
            <div className="srhs">
                {
                    Setup.map((sett)=>(
                        <div className="channel-1">
                            <img src={sett.icon} alt="loading" />
                            <p>{sett.category}</p>
                        </div>
                    ))
                }
            </div>
            <div className="bottom">
                <span><a href='#'>About</a> <a href='#'>Press</a> <a href='#'>Copyright</a></span>
                <span><a href="#">Contact us</a> <a href="#">Creators</a></span>
                <span><a href="#">Advertise</a> <a href="#">Developers</a></span>
                <div className="privacypolicy">
                    <span><a href="#">Terms</a> <a href="#">Privacy policy</a></span>
                    <span><a href="#">How YouTube works</a></span>
                    <span><a href="#">Test new features</a></span>
                </div>
                <div className="copyrights">
                    <p>© 2023 Google LLC</p>
                </div>
            </div>
        </div>
    );
}
export default Leftelement;