import Fetchorias from "./Fetch";

function Album({title = 'Nombre del album', description = 'Nombre del artista'}) {
    
    return (
        
        <div className="Card">
            <img src='' alt="" />
            <h2>{title} </h2>
            <p>{description}</p>
        </div>
    );
}

export default Album;