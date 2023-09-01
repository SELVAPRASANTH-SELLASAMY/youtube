import './playerbody.css';
import Video from './video';
function Playerbody(){
    const playLists=[
        'Learning',
        'Hollywood songs',
        'Bootstrap tutorial',
        'Movie',
        'Love songs',
        'Datastructures',
        'Learning',
        'Hollywood songs',
        'Bootstrap tutorial',
        'Movie',
        'Love songs',
        'Datastructures',
        'Learning',
        'Hollywood songs',
        'Bootstrap tutorial',
        'Movie',
        'Love songs',
        'Datastructures',
        'Learning',
        'Hollywood songs',
        'Bootstrap tutorial',
        'Movie',
        'Love songs',
        'Datastructures'
    ];
    return (
        <div className="body-container">
            {
                playLists.map((pl)=>(
                    <Video/>
                ))
            }
        </div>
    );
}
export default Playerbody;