/*
const [showRanking, setShowRanking] = useState(false)
  const [listings, setListings] = useState([])
  const url = 'https://api-formula-1.p.rapidapi.com/rankings/teams?season=2021';

  const getListings = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch(url, getListings)
      .then(res => res.json())
      .then(json => setListings(json.response))
      .catch(err => console.error('error:' + err));
  
  }, [])
  */

/*
HARD CODED
import { rankings } from "../../libs/rankings2021.js";
  let listings = []
  let teamPos = "";
  for(let i=0; i<rankings.length; i++){
      teamPos = `#${rankings[i].position} : ${rankings[i].team.name}`
      listings.push(teamPos)
  }

  */
