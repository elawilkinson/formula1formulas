# Formula 1 Formulas
`Formula 1 Formulas` is a Formula 1 fan website collating and analysing race data.

-----
-----

## F1F for users
F1F is available to browse at https://formula1formulas.netlify.app/

There are two headline tables:
- `2021 Constructor Rankings` - This shows the final rankings of the ten F1 teams at the end of the 2021 Formula One Season.
- `2021 Driver Rankings` - This shows the final rankings of the 20 individual F1 drivers at the end of the 2021 Formula One Season.

And a further data section, `Data Dives`, which gives more specific analysis:
- `Pole positions`: This generates a bar-chart showing all-time pole positions by each constructor. 

-----
-----

## F1F for developers
`Formula 1 Formulas` is built using `React`, `npm libraries` and `component libraries`.
It calls data from `Rapid API`.
Its repo is available on `GitHub`, and is deployed using `Netlify`.

-----

### Quickstart
1) To build from the existing repo, clone from `https://github.com/elawilkinson/whointheworld/`.
 -- Please note that currently there is currenlty only a `main, production branch`, without feature branches or a development branch. As such, any changes pushed will be continuously deployed to production -- 

2) Once the repo is cloned, use `npm i` to install dependencies and dev dependencies. 

3) Create a `.env` file at the root of the directory, and create a variable called `REACT_APP_API_KEY`.

4) Head to `https://rapidapi.com/api-sports/api/api-formula-1` and sign up for a free, basic package in order to receive an API key.

5) Once the API has sent through your key, copy & paste this into the .env file, and assign it to `REACT_APP_API_KEY`. You will now be able to make calls to the API.

6) The app can then be run locally by typing `npm start` in the command line. 

-----

### Libs 
The `libs` folder contains hardcoded copies of the API responses used in the app. 

There is a daily cap on free calls to the API (100pd), so it can be useful to have local copies of the API responses saved, in case that limit is reached while working on features. As such, while it is recommended to use the app in a dynamic way where possible (i.e. live `fetch` requests are made to the API), the app does also include an alternative method to access data for use while developing. 

In order to call the `libs` rather than the API, these are the steps: 

1) Navigate to `App.js`.
2) Comment out line 5 (`import RequestData...`)
3) Comment out line 14 (`</RequestData>`)
4) Ensure that line 13 is *not* commented out (`<StaticRequestData>` should be readable)

This runs an alternative version of the `Request Data` component, which uses locally-available libraries rather than calling the API.

-----

### Components
The following components make use of third-party libraries:
- `Chart` - this makes use of `chart.js`, which has React-specific documentation here (https://react-chartjs-2.js.org/examples).
- `Buttons` - the buttons throughout the app use `AwesomeButton`, which has more information on the creator's GitHub (https://github.com/rcaferati/react-awesome-button). A key quirk of this component is that `onClick` is not a valid command; `onPress` must be used instead.

-----

### Notes & comments
- Please do get in touch with me (GitHub - @elawilkinson) for any further information, or feedback!
