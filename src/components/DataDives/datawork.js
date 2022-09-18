import { racesOnly } from "../../libs/racesonly2021.js";

let lapTimes = []; 
let grandPrixNames = [];
let grandPrixIds = [];
let timesOnly = [];


export function getFastestLaps () { 
    for(let i=0; i<racesOnly.length; i++){
        let x = racesOnly[i].fastest_lap.time;        
        if(x){
            let y = Number(`${x[2]}${x[3]}`)
            let seconds = Number(60 + y)
            let miliseconds = Number(`${x[5]}${x[6]}${x[7]}`)
            let laptime = Number(`${seconds}.${miliseconds}`)
            lapTimes.push({
                'Race' : racesOnly[i].competition.name,
                'Lap time' : laptime,
                'Driver': racesOnly[i].fastest_lap.driver.id
            })
            grandPrixNames.push(racesOnly[i].competition.name)
            timesOnly.push(laptime)
            grandPrixIds.push({
                "id": racesOnly[i].competition.id,
                "Race" : racesOnly[i].competition.name
            })
        }
    }
    return [lapTimes, grandPrixNames, timesOnly, grandPrixIds]
}



// let startingGrids2021 = []

// const getListings = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//       'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
//     }
//   };

// export async function getStartingGridData(){
//     for(let i=0; i<2; i++){
//         let endPoint = Number(grandPrixIds[i].id)
//         let gridUrl = `https://api-formula-1.p.rapidapi.com/rankings/startinggrid?race=${endPoint}`
//         const results = await fetch(gridUrl, getListings);
//         const data = await results.json();
//         console.log(data[0])
//         // startingGrids2021.push(data[0].driver.name)
//         // startingGrids2021.push(data[1].driver.name)
//     }
//     // console.log(startingGrids2021)
// }



