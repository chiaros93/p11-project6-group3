import React, { useState, useEffect } from "react";
import './Catalogo.css'

function Catalogo() {
    const [albumNames, setAlbumNames] = useState([]);

    async function getAlbum() {
        const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=albums&index=10';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':  'abe1b8885dmsh8dc7b1ce66dcca3p17e457jsn3c7d09b36c84',
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

    const displayAlbums= albumNames.slice(0, 8);
    
    return(
        <div id="catalogo">
            <h2>Lista de Álbumes</h2>
            <div className="getAlbums">
                {displayAlbums.map((album) => (
                <div key={album.id} className="card">
                    <img src={album.album.cover_medium} className="cover"/>
                    <p>{album.title}</p>
                    <p>{album.artist.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );// el segundo parámetro asegura que useEffect se ejecute solo una vez al montar el componente

}

export default Catalogo;
