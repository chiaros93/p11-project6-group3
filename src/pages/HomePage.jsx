import Header from "../components/Sidebar"
import Catalogo from "../components/CatalogoHomepage"
import BottonProfile from "../components/BottonProfile"


function Main(){
    return(
        <div className='caja1'>
            <Header />
            <Catalogo />
            <BottonProfile />
        </div>
    )
}


export default Main;