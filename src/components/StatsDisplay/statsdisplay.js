import "../App/App.css"

import DriverCard from "../DriverCard/drivercard.js";
import TeamCard from "../TeamCard/teamcard.js";
import BackToTopButton from "../BackToTopButton/BackToTopButton.js";
import DataDiveButtons from "../DataDives/DataDiveButtons.js";
// import StaticDataDiveButtons from "../DataDives/staticDataDiveButtons.js"

function StatsDisplay ({teamListings, driverListings, teamHistory, setShowRanking, showCons, showDriver, showMoreData, raceListings}) {
    
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

