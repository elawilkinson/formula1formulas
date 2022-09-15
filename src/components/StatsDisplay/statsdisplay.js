import "../App/App.css"

import DriverCard from "../DriverCard/drivercard.js";
import TeamCard from "../TeamCard/teamcard.js";
import CloseButton from "../CloseButton/closebutton.js";
import LogicButtons from "../logic/logicbuttons.js";

function StatsDisplay ({teamListings, driverListings, setShowRanking, showCons, showDriver, showMoreData}) {
    
    
    return(
        <>           
            {showCons ? (
                <div>
                    <CloseButton setShowRanking={setShowRanking} />
                    <h2>Constructors' championship</h2>
                {teamListings.map((listing, index) => {
                    return(
                    <TeamCard key={index} listing={listing} />
                    )
                })}
                    <CloseButton setShowRanking={setShowRanking} />
            </div>
            ) : <> </> }
            
            {showDriver ? (
            <div>
                <CloseButton setShowRanking={setShowRanking} />
                <h2>Drivers' championship</h2>
                {driverListings.map((listing, index) => {
                    return(
                    <DriverCard key={index} listing={listing} />
                    )
                })}
                <CloseButton setShowRanking={setShowRanking} />
            </div>
            ) : <> </> }

            {showMoreData ? (
            <div>
                <LogicButtons />
                <CloseButton setShowRanking={setShowRanking} />
            </div>
            ) : <> </> }
        </>
    )
}

export default StatsDisplay

