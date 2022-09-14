import React, {useState, useEffect} from 'react';

function DataMenu () {
    const [teamStats, setTeamStats] = useState({})
    const [ferrariStats, setFerrariStats] = useState({})
    const [mercedesStats, setMercedesStats] = useState({})
    const [showFerrari, setShowFerrari] = useState(false)
    const url = 'https://api-formula-1.p.rapidapi.com/rankings/teams'
    

    // async function getTeamStats(){
    //     const results = await fetch('https://api-formula-1.p.rapidapi.com/teams', {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    //             'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    //           }
    //     });
    //     const data = results.json();
    //     setTeamStats(data.response)    
    // }

    const getStats = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
          'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
        }
      };
    
      useEffect(() => {
        fetch(url, getStats)
          .then(res => res.json())
          .then(json => setTeamStats(json.response))
          .catch(err => console.error('error:' + err));
      
      }, [])
     
    

    console.log(teamStats)   
    
    function displayFerrari(){
        // setFerrariStats(data.response[2])
        setShowFerrari(true)
    }

    function displayMercedes(){
        // setFerrariStats(data.response[4])
    }

    return(
        <>
            <button onClick={displayFerrari}> Ferrari </button>
            <button onClick={displayMercedes}> Mercedes </button>
            {showFerrari ? (
                <p>{ferrariStats.name}</p>
            ) : (
                <> </>
            )}
            
        </>
    )
}

export default DataMenu 