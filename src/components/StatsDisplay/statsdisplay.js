import DriverCard from "../DriverCard/drivercard.js";
import TeamCard from "../TeamCard/teamcard.js";

function StatsDisplay ({teamListings, driverListings, setShowRanking, showCons, showDriver}) {
    
    function closeListings () {
        setShowRanking(false);
    }

    console.log(driverListings)

    return(
        <>
            {showCons ? (

                <div>
                {teamListings.map((listing, index) => {
                    return(
                    <TeamCard key={index} listing={listing} />
                    )
                })}
            </div>
            ) : <> </> }
            
            {showDriver ? (
            <div>
                {driverListings.map((listing, index) => {
                    return(
                    <DriverCard key={index} listing={listing} />
                    )
                })}
            </div>
            ) : <> </> }
            
            <button onClick={closeListings}>Close stats</button>
        </>
    )
}

export default StatsDisplay

