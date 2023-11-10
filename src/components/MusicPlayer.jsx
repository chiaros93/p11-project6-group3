import Player from "@madzadev/audio-player";
import { useState } from "react";
import Search from "./Search";



const tracks=[
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
]



function MusicPlayer(){
    const [canciones, setCanciones] = useState("")
    
    return(
        <>

        <Player
        autoPlay={false}
        trackList={tracks}
        includeTags={true}
        includeSearch={false}
        showPlaylist={true}
        autoPlayNextTrack={true}
        />
        </>
    )

}

export default MusicPlayer;