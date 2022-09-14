import './App.css';

const url = 'https://api-formula-1.p.rapidapi.com/teams/';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '9781f51be0msh5e4ddbb85b9e4dcp11e150jsn80ef1590e564',
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
