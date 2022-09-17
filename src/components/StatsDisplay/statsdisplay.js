import "../App/App.css"

import DriverCard from "../DriverCard/drivercard.js";
import TeamCard from "../TeamCard/teamcard.js";
import LogicButtons from "../logic/logicbuttons.js";

function StatsDisplay ({teamListings, driverListings, setShowRanking, showCons, showDriver, showMoreData}) {
    
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
                    <a href="home-buttons-container">
                        <button> X </button>
                    </a>
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
                <a href="home-buttons-container">
                        <button> X </button>
                    </a>
            </div>
            ) : <> </> }

            {showMoreData ? (
            <div>
                <LogicButtons />
                <a href="home-buttons-container">
                        <button> X </button>
                </a>
            </div>
            ) : <> </> }
        </>
    )
}

export default StatsDisplay

