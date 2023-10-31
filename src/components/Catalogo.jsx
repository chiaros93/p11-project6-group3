import React, { useEffect } from 'react';
import './Catalogo.css';

function Catalogo() {
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://deezerdevs-deezer.p.rapidapi.com/infos';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      {}
    </div>
  );
}

export default Catalogo;
