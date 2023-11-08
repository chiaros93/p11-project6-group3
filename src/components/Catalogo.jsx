import React, { useState, useEffect } from "react";
import './Catalogo.css'

function Catalogo() {
    const [albumNames, setAlbumNames] = useState([]);

    async function getAlbum() {
        const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=albums&index=10';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const results = await response.json();
            setAlbumNames(results.data); // asumiendo que los nombres de los álbumes están en la propiedad 'data'
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAlbum();
    }, []);

    return (
        <div id="catalogo">
            <h2>Lista de Álbumes</h2>
            <div className="getAlbums">
                {albumNames.length > 0 ? (
                    albumNames.slice(0,8).map((album) => (
                        <div key={album.id} className="card">
                            <img src={album.album.cover_medium} className="cover" alt="Album Cover" />
                            <p>{album.title}</p>
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