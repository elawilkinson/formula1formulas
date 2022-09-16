import { racesOnly } from "../../libs/racesonly2021.js";

export function getFastestLaps () { 
    let lapTimes = []; 
    let grandPrixNames = [];
    let timesOnly = [];
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
        }
    }
    return [lapTimes, grandPrixNames, timesOnly]
}



