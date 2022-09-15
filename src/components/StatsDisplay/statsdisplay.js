import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

import DriverCard from "../DriverCard/drivercard.js";
import TeamCard from "../TeamCard/teamcard.js";

function StatsDisplay ({teamListings, driverListings, setShowRanking, showCons, showDriver}) {
    
    function closeListings () {
        setShowRanking(false);
    }

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

                <AwesomeButton 
                    type="secondary" 
                    onPress={closeListings}>
                    Close stats
                </AwesomeButton>
        </>
    )
}

export default StatsDisplay

