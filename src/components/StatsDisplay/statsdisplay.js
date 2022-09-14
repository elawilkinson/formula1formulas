function StatsDisplay ({listings, setShowRanking}) {
    
    function closeListings () {
        setShowRanking(false);
    }

    return(
        <>
            <div>
                {listings.map((index, listing) => {
                    return(
                    <p key={index} listing={listing}>{index}</p>
                    )
                })}
            </div>
            <button onClick={closeListings}>Close stats</button>
        </>
    )
}

export default StatsDisplay

/*
              <div className="card-gallery">
                    {jobList.map((job, index) => {
                        return <ApplicationCard job={job} key={index}/>               
                    })}
                </div>
*/