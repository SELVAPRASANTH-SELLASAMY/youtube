import './suggesstions.css';
function Suggesstions(){
    const suggest=[
        'All',
        'Mixes',
        'Music',
        'Gaming',
        'Object-oriented programming',
        'Gadgets',
        'Presentations',
        'Tamil Cinema',
        'CSS',
        'News',
        'APIs',
        'Moon',
        'Recently uploaded',
        'Mobile Phones',
        'Editing',
        'Live',
        'Algorithms',
        'Watched',
        'New to you'
    ];
    return(
        <div className="suggesstion-container">
            {
                suggest.map((text)=>(
                    <div className="content">
                        <p>{text}</p>
                        <div className="contentonhover">
                            <p>{text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default Suggesstions;