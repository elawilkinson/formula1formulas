import './App.css';

const url = 'https://api-formula-1.p.rapidapi.com/teams/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

function App() {

  
  return (
    <div className="App">
      <p>Testing123</p>
    </div>
  );
}

export default App;
