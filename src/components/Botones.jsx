import './Botones.css'

function Botones() {
    return (
            <div className='botones'>
                <button className='registrarte'>
                    <a id='btn1' href="https://www.spotify.com/es/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2Fintl-es%3F">Registrate</a>
                </button>
                <button className='iniciar'>
                    <a id='btn' href="https://accounts.spotify.com/es-ES/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-es%3F">Iniciar Sesión</a>
                </button>
            </div>
    );
}


export default Botones;
