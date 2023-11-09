import { useState } from "react"
import './Search.css'
function Search() {
    const [cancion, setCancion] = useState('');
    const [canciones, setCanciones] = useState([]);

    function handleSearch(e) {
        e.preventDefault()
        if (cancion.trim() === '') {
            alert('Debes ingresar algo');
            return
        }
        console.log(cancion)
        setCancion('')
        getSong(cancion)
    }

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }


    async function getSong() {
        try {
            let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${cancion}`
            let data = await fetch(url, options)
            let res = await data.json()
            setCanciones(res.data)
            console.log(res)

        } catch (error) {
            console.log('Upss.. error', error)
        }
    }

    return (
        <>
        <form className="activate-search" action="action" onSubmit={handleSearch}>
            <button type="submit" className="search">
                <a href="">
                    <svg id="lupa" xmlns="http://www.w3.org/2000/svg" width="30"  height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M29.5788 27.4709L24.0171 21.95C26.1759 19.2561 27.2214 15.8369 26.9386 12.3953C26.6557 8.95378 25.066 5.75147 22.4963 3.44689C19.9266 1.1423 16.5722 -0.0893989 13.1229 0.00505728C9.67366 0.0995135 6.39163 1.51294 3.95171 3.95472C1.51179 6.39649 0.0994379 9.68101 0.00505344 13.1329C-0.0893311 16.5848 1.14143 19.9417 3.44427 22.5133C5.74711 25.085 8.94698 26.6759 12.3859 26.959C15.8249 27.2421 19.2415 26.1958 21.9333 24.0353L27.45 29.5562C27.5894 29.6968 27.7552 29.8085 27.9379 29.8846C28.1206 29.9608 28.3165 30 28.5144 30C28.7123 30 28.9082 29.9608 29.0909 29.8846C29.2736 29.8085 29.4394 29.6968 29.5788 29.5562C29.849 29.2765 30 28.9026 30 28.5136C30 28.1245 29.849 27.7506 29.5788 27.4709ZM13.5233 24.0353C11.4478 24.0353 9.41898 23.4194 7.69329 22.2655C5.9676 21.1115 4.62259 19.4714 3.82834 17.5524C3.03409 15.6335 2.82628 13.5219 3.23118 11.4848C3.63609 9.44766 4.63552 7.57643 6.1031 6.10774C7.57068 4.63904 9.44049 3.63885 11.4761 3.23364C13.5117 2.82843 15.6216 3.0364 17.5391 3.83125C19.4566 4.6261 21.0955 5.97213 22.2486 7.69913C23.4016 9.42614 24.0171 11.4565 24.0171 13.5336C24.0171 16.3188 22.9115 18.99 20.9435 20.9594C18.9756 22.9289 16.3064 24.0353 13.5233 24.0353Z" fill="black"/></svg>
                </a>
            </button>
            <input type="text" placeholder="buscar" className="br" value={cancion} onChange={e => setCancion(e.target.value)} />
        </form>
            <div className="ctg">
                <div className="getAlbums">
                {canciones.map((cancion, index) => (
                    <>
                        <div className="card" key={index}>
                            <img src={cancion.album.cover_medium} className="cover" alt={cancion.title} />
                            <h2>{cancion.title}</h2>
                        </div>
                    </>
                )
                )
                }
                </div>
            </div>
        </>
    )
}
export default Search;