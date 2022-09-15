import "../App/App.css"

import DriverCard from "../DriverCard/drivercard.js";
import TeamCard from "../TeamCard/teamcard.js";
import CloseButton from "../CloseButton/closebutton.js";
import Chart from "../Chart/chart.js";

function StatsDisplay ({teamListings, driverListings, setShowRanking, showCons, showDriver, showMoreData}) {
    
    
    return(
        <>
            <CloseButton setShowRanking={setShowRanking} />

            {showCons ? (

                <div>
                    <h2>Constructor's championship</h2>
                {teamListings.map((listing, index) => {
                    return(
                    <TeamCard key={index} listing={listing} />
                    )
                })}
            </div>
            ) : <> </> }
            
            {showDriver ? (
            <div>
                <h2>Driver's championship</h2>
                {driverListings.map((listing, index) => {
                    return(
                    <DriverCard key={index} listing={listing} />
                    )
                })}
            </div>
            ) : <> </> }

            {showMoreData ? (
            <div>
                <Chart />
            </div>
            ) : <> </> }


            <CloseButton setShowRanking={setShowRanking} />
        </>
    )
}

export default StatsDisplay

