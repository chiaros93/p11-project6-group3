import { useState, useEffect } from "react";
const clientId = '48844ec472534b97ba39dc927cb29de9';
const clientSecret = '9ef6e89464254b9da4b238ec14932f2e';
const redirectUri = 'https://github.com/chiaros93/p11-project6-group3.git';

// Codifica las credenciales para enviarlas en la solicitud
const basicAuth = btoa(`${clientId}:${clientSecret}`);

function token(){
    const [access_Token, setAccess_Token] = useState('');
    async function getToken(){
        // URL de autorización
        const authUrl = 'https://accounts.spotify.com/api/token';
        // Parámetros de la solicitud de autorización
        const authParams = new URLSearchParams({
            grant_type: 'client_credentials',
    });
          // Configuración de la solicitud de autorización
    const authOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${basicAuth}`,
        },
        body: authParams,
        };

        try {
            const response = await fetch(authUrl, authOptions)
            const result = await response.json()
            setAccess_Token = result.access_token
        } catch (error) {
            console.error(error)
            
        }
        
        
    fetch(authUrl, authOptions)
    .then(response => response.json())
    .then(data => {
        setAccess_Token  = data.access_token;
        // Ahora puedes usar el token de acceso para hacer solicitudes a la API de Spotify
            console.log('Token de acceso:', accessToken);
        })
        .catch(error => console.error('Error al obtener el token de acceso:', error));
        // Obtener el token de acceso
    }
    useEffect(() => {
        getToken();
    }, [])
}


    const url = 'https://api.spotify.com/v1/browse/new-releases?limit=10';
    const options ={
        method: 'GET',
        headers: {
            
            'Authorization': `Bearer ${access_Token}`,
        },
    }



function SpotiFetch(){
    fetch(url, options)
    .then(r => r.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log('Error al obtener informacion', error))
    return(
        <div>

        </div>
    );
}


export default SpotiFetch;