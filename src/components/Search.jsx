import { useState} from "react"
import './Search.css'
import DeezerApiService from "../services/deezerApiService";
import Player from "@madzadev/audio-player";

function Search({}) {
    const [cancion, setCancion] = useState('');
    const [canciones, setCanciones] = useState([]);
    const [tracks, setTracks] = useState([
        {
        url: "https://cdns-preview-a.dzcdn.net/stream/c-aaa5371eb02be6493e51919e2ee63603-6.mp3",
        title: "Life is a Highway - El Kuchau",
        tags:["Temazo"]
    },
    {
        url: "https://cdns-preview-f.dzcdn.net/stream/c-feca60d18748299cd6dbd6c16dc69355-7.mp3",
        title: "Blame It on the Boogie - The Jacksons",
        tags:["El pequeño Maicol"]
    },
    {
        url: "https://cdns-preview-a.dzcdn.net/stream/c-aceed0d1b1929558e54d9811675963d3-10.mp3",
        title: "F* You - CeeLo Green",
        tags:["Para los ex"]
    },
    {
        url: "https://cdns-preview-c.dzcdn.net/stream/c-c9dcc5dffa3210c0a7dd4d7c37f84540-3.mp3",
        title: "Highway to Hell - AC/DC",
        tags:["Arte"]
    }
    ])

    function handleSearch(e) {
        e.preventDefault()
        if (cancion.trim() === '') {
            alert('Debes ingresar algo');
            return;
        }
        console.log(cancion);
        setCancion('');
        getsong(cancion)
    }

    async function getsong(){
        let deezer = new DeezerApiService();
        deezer.getSong(import.meta.env.VITE_API_KEY, cancion)
        .then(r => {
            console.log(r);
            setCanciones(r);
            const previews = extractPreviews(r);
            setTracks(previews)
        })

        function extractPreviews(data){
            return data.map((cancion)=> ({
                url: cancion.preview,
                title: cancion.title + " - " + cancion.artist.name,
                tags: ["Searched"]
            }))
        }
    }
    return (
        <>
        <form className="activate-search" action="action" onSubmit={handleSearch}>
            <a className='ico-a' href ="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><path d="M28.3333 9.0251L18.3334 1.14453C17.4167 0.407478 16.2299 0 15.0001 0C13.7702 0 12.5834 0.407478 11.6667 1.14453L1.66681 9.0251C1.13743 9.4507 0.714986 9.9728 0.427608 10.5566C0.14023 11.1405 -0.00548756 11.7726 0.000157989 12.411V25.5054C0.000157989 26.6974 0.526939 27.8407 1.46461 28.6836C2.40229 29.5265 3.67405 30 5.00012 30H25C26.3261 30 27.5978 29.5265 28.5355 28.6836C29.4732 27.8407 29.9999 26.6974 29.9999 25.5054V12.3961C30.0032 11.7602 29.8564 11.1309 29.5691 10.5498C29.2818 9.9687 28.8606 9.44903 28.3333 9.0251ZM18.3334 27.0036H11.6667V19.5125C11.6667 19.1152 11.8423 18.7341 12.1549 18.4532C12.4675 18.1722 12.8914 18.0143 13.3334 18.0143H16.6667C17.1087 18.0143 17.5326 18.1722 17.8452 18.4532C18.1578 18.7341 18.3334 19.1152 18.3334 19.5125V27.0036ZM26.6666 25.5054C26.6666 25.9027 26.491 26.2838 26.1785 26.5648C25.8659 26.8457 25.442 27.0036 25 27.0036H21.6667V19.5125C21.6667 18.3205 21.1399 17.1773 20.2022 16.3344C19.2645 15.4915 17.9928 15.0179 16.6667 15.0179H13.3334C12.0073 15.0179 10.7356 15.4915 9.79789 16.3344C8.86021 17.1773 8.33343 18.3205 8.33343 19.5125V27.0036H5.00012C4.5581 27.0036 4.13418 26.8457 3.82162 26.5648C3.50906 26.2838 3.33347 25.9027 3.33347 25.5054V12.3961C3.33377 12.1833 3.38446 11.9731 3.48216 11.7794C3.57987 11.5856 3.72235 11.4128 3.90013 11.2724L13.9001 3.40682C14.2042 3.16663 14.5952 3.03417 15.0001 3.03417C15.4049 3.03417 15.7959 3.16663 16.1 3.40682L26.1 11.2724C26.2778 11.4128 26.4202 11.5856 26.5179 11.7794C26.6156 11.9731 26.6663 12.1833 26.6666 12.3961V25.5054Z" fill="black"/></svg>Inicio
            </a>
            <button type="submit" className="search">
                <a href="">
                    <svg id="lupa" xmlns="http://www.w3.org/2000/svg" width="30"  height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M29.5788 27.4709L24.0171 21.95C26.1759 19.2561 27.2214 15.8369 26.9386 12.3953C26.6557 8.95378 25.066 5.75147 22.4963 3.44689C19.9266 1.1423 16.5722 -0.0893989 13.1229 0.00505728C9.67366 0.0995135 6.39163 1.51294 3.95171 3.95472C1.51179 6.39649 0.0994379 9.68101 0.00505344 13.1329C-0.0893311 16.5848 1.14143 19.9417 3.44427 22.5133C5.74711 25.085 8.94698 26.6759 12.3859 26.959C15.8249 27.2421 19.2415 26.1958 21.9333 24.0353L27.45 29.5562C27.5894 29.6968 27.7552 29.8085 27.9379 29.8846C28.1206 29.9608 28.3165 30 28.5144 30C28.7123 30 28.9082 29.9608 29.0909 29.8846C29.2736 29.8085 29.4394 29.6968 29.5788 29.5562C29.849 29.2765 30 28.9026 30 28.5136C30 28.1245 29.849 27.7506 29.5788 27.4709ZM13.5233 24.0353C11.4478 24.0353 9.41898 23.4194 7.69329 22.2655C5.9676 21.1115 4.62259 19.4714 3.82834 17.5524C3.03409 15.6335 2.82628 13.5219 3.23118 11.4848C3.63609 9.44766 4.63552 7.57643 6.1031 6.10774C7.57068 4.63904 9.44049 3.63885 11.4761 3.23364C13.5117 2.82843 15.6216 3.0364 17.5391 3.83125C19.4566 4.6261 21.0955 5.97213 22.2486 7.69913C23.4016 9.42614 24.0171 11.4565 24.0171 13.5336C24.0171 16.3188 22.9115 18.99 20.9435 20.9594C18.9756 22.9289 16.3064 24.0353 13.5233 24.0353Z" fill="black"/></svg>
                </a>
            </button>
            <input type="text" placeholder="Buscar" className="br" value={cancion} onChange={e => setCancion(e.target.value)} />
        </form>
            <div className="ctg">
            <div className="musicPlayer">
                    <Player trackList={tracks} includeSearch={false} />
                </div>
                <div className="getAlbums">
                {canciones.map((cancion, index) => (
                    <>
                        <div className="card" key={index}>
                            <img src={cancion.album.cover_medium} className="cover" alt={cancion.title} />
                            <h2>{cancion.title}</h2>
                        </div>
                    </>
                ))}
                </div>
            </div>
        </>
    )
}
export default Search;

