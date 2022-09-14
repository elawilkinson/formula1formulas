import TeamCard from "../TeamCard/teamcard.js";

function StatsDisplay ({listings, setShowRanking}) {
    
    function closeListings () {
        setShowRanking(false);
    }

    return(
        <>
            <div>
                {listings.map((listing, index) => {
                    return(
                    <TeamCard key={index} listing={listing} />
                    )
                })}
            </div>
            <button onClick={closeListings}>Close stats</button>
        </>
    )
}

export default StatsDisplay

