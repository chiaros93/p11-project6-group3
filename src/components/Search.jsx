import {useState } from "react"
function Search (){
    const [cancion, setCancion] = useState('');
    const [canciones, setCanciones] = useState([]);

    function handleSearch(e){
        e.preventDefault()
        if(cancion.trim()  === '' ){
            alert('Debes ingresar algo');
            return
        }
        console.log(cancion)
        setCancion('')
        getSong(cancion)
    }   

    const options={
        method: 'GET',
        headers: {
            'X-RapidAPI-Key':  'abe1b8885dmsh8dc7b1ce66dcca3p17e457jsn3c7d09b36c84',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }


    async function getSong(){
        try {
            let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${cancion}`
            let data =await fetch(url, options)
            let res = await data.json()
            setCanciones(res.data)
            console.log(res)
            
        } catch (error) {
            console.log('Upss.. error', error)
        }
    }

    return(
        <>
        <h2>Deezer Api</h2>
        <form action="action" onSubmit={handleSearch}>
            <input type="text" value={cancion} onChange={e => setCancion(e.target.value)} />
            <button type="submit">Search</button>
        </form>
            {canciones.map((cancion, index) => (
                <>
                <div key={index}>
                    <img src={cancion.album.cover_medium} alt={cancion.title} />
                    <h2>{cancion.title}</h2>
                    <button onClick={()=> setSelectedSong(cancion.link)}>Play song</button>
                </div>
                </>
            )
            )
            }
        </>
    )
}
export default Search;