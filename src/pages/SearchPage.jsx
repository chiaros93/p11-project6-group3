import BottonProfile from "../components/BottonProfile"
import { ContainerLogo } from "../components/Sidebar";
import "../components/Sidebar.css"
import MusicPlayer from "../components/MusicPlayer";
import Search from "../components/Search";
function SecondPage(){
    return(
        <div>
            <header>
                <ContainerLogo />
                <BottonProfile />
            </header>
            <Search />
            <footer>
            <MusicPlayer />
            </footer>
        </div>
    );
}

export default SecondPage;