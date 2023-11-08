import BottonProfile from "../components/BottonProfile"
import { ContainerLogo } from "../components/Sidebar";
import "../components/Sidebar.css"
import Search from "../components/Search";

function SecondPage(){
    return(
        <div>
            <header>
                <ContainerLogo />
                <BottonProfile />
                <Search />
            </header>
        </div>
    );
}

export default SecondPage;