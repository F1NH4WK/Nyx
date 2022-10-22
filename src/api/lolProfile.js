export default async function requestLoL(nick){

    const LOL_URL = 'https://br1.api.riotgames.com/lol';
    const header = {'X-Riot-Token': "RGAPI-4aaaaa91-2819-45c7-aab4-92d77f14eff1" }

    // GET THE SUMMONER RANK AND THEIR POINTS
    async function getEntries(sumId){
        const response = await fetch(LOL_URL + `/league/v4/entries/by-summoner/${sumId}`, {headers: header})
        const data = await response.json();
        return data
    }

    // GET THE TOP 3 SUMMONER'S CHAMPIONS
    async function getChampions(sumId){
        let response = await fetch(LOL_URL + `/champion-mastery/v4/champion-masteries/by-summoner/${sumId}/top`, {headers: header})
        let data = await response.json();
        return data
    }

    // GET THE CHAMPION NAME BY ID, IT'LL BE USED TO GENERATE CHAMPION'S IMAGE
    async function getChampionName(){
        let response = await fetch('http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json')
        let data = await response.json()
        return data
    }
    
    // GET THE SUMMONER ID TO MAKE OTHERS REQUESTS
    async function getSumId(nick){
        let response = await fetch(LOL_URL + `/summoner/v4/summoners/by-name/${nick}`, {headers: header})
        let data = await response.json();
        return data
    }

    
    let id = await getSumId(nick).then(data => {return data.id}); // 1s
    let rankInfo = await getEntries(id).then(data => {
        try{ return {rank: data[0].tier, pdl: data[0].leaguePoints} }
        
        catch{ return null }
    }); // 2s
    let champions = await getChampions(id).then(data => data.map((i) => {return i.championId}));

    let summonerChamps = await getChampionName().then(data => {
        return champions.map(championId => {

            let championName = ''

            for (const [key, value] of Object.entries(data['data'])){
                
                if (championId == value.key){
                    championName = value.id
                    return {
                        championName: championName,
                        championSplash: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`
                    }
                }
            }})}) // 2s

    const summonerData = {
        id: id,                     // it'll be used to do some future changes
        rankInfo: rankInfo,         // display rank
        champions: summonerChamps   // display background champion
    }

    return summonerData // 3s
}