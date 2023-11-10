import Player from "@madzadev/audio-player";

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


const colors = `html {
    --tagsBackground: #9440f3;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #2cc0a0;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #18191f;
    --searchText: #ffffff;
    --searchPlaceHolder: #575a77;
    --playerBackground: #18191f;
    --titleColor: #ffffff; 
    --timeColor: #ffffff;
    --progressSlider: #9440f3;
    --progressUsed: #ffffff;
    --progressLeft: #151616;
    --volumeSlider: #9440f3;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
    --playlistBackground: #18191f;
    --playlistText: #575a77;
    --playlistBackgroundHoverActive:  #18191f;
    --playlistTextHoverActive: #ffffff;
}`;

function MusicPlayer(){
    return(
        <>

        <Player
        autoplay={false}
        trackList={tracks}
        includeTags={true}
        includeSearch={false}
        showPlaylist={true}
        autoPlayNextTrack={true}

        customColorScheme={colors}
        />
        </>
    )

}

export default MusicPlayer;