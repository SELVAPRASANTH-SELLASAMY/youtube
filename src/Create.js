import './css/Create.css';
import upld from './icons/upload.svg';
import liv from './icons/createlive.svg';
function Create(){
    return(
        <div className="Create-container">
            <div className="upld-video">
                <img src={upld} alt="upload" />
                <p>Create</p>
            </div>
            <div className="live">
                <img src={liv} alt="Live" />
                <p>Go live</p>
            </div>
        </div>
    );
}
export default Create;