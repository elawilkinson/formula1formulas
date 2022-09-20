import {useState} from "react"
import "../App/App.css"

import DriverCard from "../DriverCard/drivercard.js";
import TeamCard from "../TeamCard/teamcard.js";
import BackToTopButton from "../BackToTopButton/BackToTopButton.js";
import DataDiveButtons from "../DataDives/DataDiveButtons.js";
// import StaticDataDiveButtons from "../DataDives/staticDataDiveButtons.js"

function StatsDisplay ({teamListings, driverListings, setRaceListings, setShowRanking, showCons, showDriver, showMoreData, showDatasetOptions, raceListings}) {
    const [teamHistory, setTeamHistory] = useState([]);
    // const raceUrl = 'https://api-formula-1.p.rapidapi.com/races?season=2021'
    const teamHistoryUrl = 'https://api-formula-1.p.rapidapi.com/teams';

    const getListings = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    }

   async function getRaceAndTeamHistory () {
        await fetch(teamHistoryUrl, getListings)
            .then(res => res.json())
            .then(json => setTeamHistory(json.response))
            .catch(err => console.error('error:' + err));
        
        // await fetch(raceUrl, getListings)
        //     .then(res => res.json())
        //     .then(json => setRaceListings(json.response))
        //     .catch(err => console.error('error:' + err));
    }

    console.log(teamHistory)

    return(
        <>           
            {showCons ? (
                <div>
                    <h2>Constructors' championship</h2>
                {teamListings.map((listing, index) => {
                    return(
                    <TeamCard key={index} listing={listing} />
                    )
                })}
                    <BackToTopButton />
            </div>
            ) : <> </> }
            
            {showDriver ? (
            <div>
                <h2>Drivers' championship</h2>
                {driverListings.map((listing, index) => {
                    return(
                    <DriverCard key={index} listing={listing} />
                    )
                })}
                <BackToTopButton />
            </div>
            ) : <> </> }

            {showMoreData ? (
            <div>
            <DataDiveButtons onPress={getRaceAndTeamHistory} raceListings={raceListings} teamHistory={teamHistory} />             
                {/* <StaticDataDiveButtons raceListings={raceListings} teamHistory={teamHistory} />              */}
            </div>
            ) : <> </> }
        </>
    )
}

export default StatsDisplay

