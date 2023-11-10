import React, { useState, useEffect } from "react";
import './CatalogoHomepage.css'
import DeezerApiService from "../services/deezerApiService";

function Catalogo() {
    const [albumNames, setAlbumNames] = useState([]);

    useEffect(() => {
        let deezer = new DeezerApiService()
        deezer.getAlbums(import.meta.env.VITE_API_KEY)
        .then(a => setAlbumNames(a))
    }, []);

    return (
        <div className="catalogo">
            <h2>Lista de Álbumes</h2>
            <div className="getAlbums">
                {albumNames.length > 0 ? (
                    albumNames.slice(0,8).map((album) => (
                        <div key={album.id} className="card">
                            <img src={album.album.cover_medium} className="cover" alt="Album Cover" />
                            <p></p>
                            <p>{album.artist.name}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Catalogo;