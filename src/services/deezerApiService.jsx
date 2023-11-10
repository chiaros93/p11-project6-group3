export default class DeezerApiService{
    
    async getAlbums(accessToken){
        const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=pop';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': accessToken,
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const results = await response.json();
            return results.data
        } catch (error) {
            console.error(error);
        }
    };

    async getSong(accessToken, text) {
        let url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${text}&limit=12`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': accessToken,
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
            },
        };

        try {
            let data = await fetch(url, options);
            let res = await data.json();
            return res.data
        } catch (error) {
            console.log('Upss.. error', error);
        }
    }

}