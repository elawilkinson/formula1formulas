

function RequestData ({listings, setShowRanking}) {

    function getStats(){
        setShowRanking(true)
        console.log(listings)
    }

    return(
        <>
            <p>F O R M U L A</p>
            <button onClick={getStats}> Get stats </button>
        </>
    )
}

export default RequestData;