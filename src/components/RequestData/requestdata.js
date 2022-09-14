

function RequestData ({setShowRanking}) {

    function getStats(){
        setShowRanking(true)
    }

    return(
        <>
            <p>F O R M U L A</p>
            <button onClick={getStats}> Get stats </button>
        </>
    )
}

export default RequestData;