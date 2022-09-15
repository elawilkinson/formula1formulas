import React, {useState, useEffect} from 'react'

import StatsDisplay from "../StatsDisplay/statsdisplay.js";

function RequestData () {

    const [showRanking, setShowRanking] = useState(false);
    const [showCons, setShowCons] = useState(false);
    const [showDriver, setShowDriver] = useState(false);
    const [teamListings, setTeamListings] = useState([]);
    const [driverListings, setDriverListings] = useState([]);
    const constructorsUrl = 'https://api-formula-1.p.rapidapi.com/rankings/teams?season=2021';
    const driversUrl = 'https://api-formula-1.p.rapidapi.com/rankings/drivers?season=2021';

  const getListings = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(constructorsUrl, getListings)
      .then(res => res.json())
      .then(json => setTeamListings(json.response))
      .catch(err => console.error('error:' + err));

      fetch(driversUrl, getListings)
      .then(res => res.json())
      .then(json => setDriverListings(json.response))
      .catch(err => console.error('error:' + err));
  
  }, [])

    function getConsStats(){
        setShowRanking(true)
        setShowCons(true)
        setShowDriver(false)
    }

    function getDriverStats(){
      setShowRanking(true)
      setShowCons(false)
      setShowDriver(true)
  }

    function showOptions(){
        console.log('options')
    }

    return(
        <>
            <h1><span id="app-title-span">formula</span> F O R M U L A S</h1>
            <button onClick={getConsStats}> 2021 | Constructor rankings </button>
            <button onClick={getDriverStats}> 2021 | Driver rankings </button>
            <button onClick={showOptions}> More data </button>
            {showRanking ? (
                <StatsDisplay 
                  teamListings={teamListings} 
                  driverListings={driverListings}
                  showCons={showCons}
                  showDriver={showDriver} 
                  setShowRanking={setShowRanking}/>
            ) : <></>}
        </>
    )
}

export default RequestData;