const respuesta = document.getElementById('texto');

const url = 'https://spotify23.p.rapidapi.com/search/?q=album&type=albums&offset=0&limit=10&numberOfTopResults=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'abe1b8885dmsh8dc7b1ce66dcca3p17e457jsn3c7d09b36c84',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

let albums = [];

try {
    const response = await fetch(url, options);
    const results = await response.json();
    
    console.log(results);
} catch (error) {
    console.error(error);
}


function Fetchorias(){

    return(
        <div id="texto">

        </div>
    );
}


export default Fetchorias;