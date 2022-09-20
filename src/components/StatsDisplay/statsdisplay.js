import {useEffect, useState} from "react"
import "../App/App.css"

import DriverCard from "../DriverCard/drivercard.js";
import TeamCard from "../TeamCard/teamcard.js";
import BackToTopButton from "../BackToTopButton/BackToTopButton.js";
import DataDiveButtons from "../DataDives/DataDiveButtons.js";
// import StaticDataDiveButtons from "../DataDives/staticDataDiveButtons.js"

function StatsDisplay ({teamListings, driverListings, setShowRanking, showCons, showDriver, showMoreData, setShowMoreData, raceListings}) {
    const [teamHistory, setTeamHistory] = useState([])
    const teamHistoryUrl = 'https://api-formula-1.p.rapidapi.com/teams';

    const getListings = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
    }

    useEffect(() => {
        fetch(teamHistoryUrl, getListings)
            .then(res => res.json())
            .then(json => setTeamHistory(json.response))
            .catch(err => console.error('error:' + err));
    }, [setShowMoreData])

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
            <DataDiveButtons raceListings={raceListings} teamHistory={teamHistory} />             
                {/* <StaticDataDiveButtons raceListings={raceListings} teamHistory={teamHistory} />              */}
            </div>
            ) : <> </> }
        </>
    )
}

export default StatsDisplay

