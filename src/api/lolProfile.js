export default function requestLoL(setInfoProfile){

    const LOL_URL = 'https://br1.api.riotgames.com/lol/';

    return fetch(LOL_URL + 'summoner/v4/summoners/by-name/O%20Azir', 
    {
        headers: {
        'X-Riot-Token': "RGAPI-9463705a-92e8-41e2-b7de-ede2d37e0fe2" 
        }
    }
    )
    .then(response => response.json())
    .then(data => {return setInfoProfile(data.id)})
    .catch(e => console.log(e))
}


