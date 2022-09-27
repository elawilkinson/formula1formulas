import {useState} from "react"
import "../App/App.css"

import DriverCard from "../DriverCard/DriverCard.js";
import TeamCard from "../TeamCard/TeamCard.js";
import BackToTopButton from "../BackToTopButton/BackToTopButton.js";
// import DataDiveButtons from "../DataDives/DataDiveButtons.js";
import StaticDataDiveButtons from "../DataDives/StaticDataDiveButtons.js"

function StatsDisplay ({teamListings, 
        driverListings, 
        raceListings,
        teamHistory,
        showCons, 
        showDriver, 
        showMoreData, 
        }) {
 

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
            {/* <DataDiveButtons raceListings={raceListings} teamHistory={teamHistory} />              */}
                <StaticDataDiveButtons raceListings={raceListings} teamHistory={teamHistory} />             
            </div>
            ) : <> </> }
        </>
    )
}

export default StatsDisplay

