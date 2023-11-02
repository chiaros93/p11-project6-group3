import React, { useState, useEffect } from "react";

function Fetchorias() {
    const [albumNames, setAlbumNames] = useState([]);

    async function getAlbum() {
        const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=albums&index=15';
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'abe1b8885dmsh8dc7b1ce66dcca3p17e457jsn3c7d09b36c84',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
        };

        try {
        const response = await fetch(url, options);
        const results = await response.json();
        console.log(results)
        setAlbumNames(results.data); // asumiendo que los nombres de los álbumes están en la propiedad 'data'
        } catch (error) {
        console.error(error);
        }
    }

    useEffect(() => {
        getAlbum();
    }, []); // el segundo parámetro asegura que useEffect se ejecute solo una vez al montar el componente

    return (
        <div id="texto">
        <h2>Lista de Álbumes</h2>
        <ul>
            {albumNames.map((album) => (
            <li key={album.id}>
                <img src={album.album.cover_medium} />
                <p>{album.title}</p>
                <p>{album.artist.name}</p>
                </li>
            ))}
        </ul>
        </div>
    );
}
export default Fetchorias;
