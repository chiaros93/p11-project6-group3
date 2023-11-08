import Botones from "../components/Botones"
import { ContainerLogo } from "../components/Header";
import "../components/Header.css"
import Search from "../components/Search";

function SecondPage(){
    return(
        <div>
            <header>
                <ContainerLogo />
                <Botones />
                <Search />
            </header>
        </div>
    );
}

export default SecondPage;