import BottonProfile from "../components/BottonProfile"
import { ContainerLogo } from "../components/Sidebar";
import "../components/Sidebar.css"
import MusicPlayer from "../components/MusicPlayer";
import Search from "../components/Search";
import Catalogo from "../components/CatalogoHomepage";
import '../App.css'
function SecondPage(){
    return(
        <div>
            <header>
                <ContainerLogo />
                <BottonProfile />
            </header>
            <Search />
        </div>
    );
}

export default SecondPage;