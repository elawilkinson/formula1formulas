# Formula 1 Formulas
`Formula 1 Formulas` is a Formula 1 fan site collating and analysing race data.

-----
-----

## F1F for users
F1F is available to browse at https://formula1formulas.netlify.app/

The app centres around three central `request data buttons`. 

The first two of these return ranking tables:
- `2021 Constructor Rankings` - This shows the final rankings of the ten F1 teams at the end of the 2021 Formula One Season.
- `2021 Driver Rankings` - This shows the final rankings of the 20 individual F1 drivers at the end of the 2021 Formula One Season.

And a further data section, `Data Dives`, returns three options for more specific analysis:
- `Pole positions`: This generates a bar-chart showing all-time pole positions by each constructor. 
- `Fastest laps`: This generates a bar-chart showing the fastest lap times of 2021 for each circuit. 
- `Starting grid positions`: This generates a data-point map showing which teams took the top pole positions for each circuit in 2021. 

-----
-----

## F1F for developers
`Formula 1 Formulas` is built using `React`, `npm libraries` and `component libraries`.
It calls data from `Rapid API`.
Its repo is available on `GitHub`, and is deployed using `Netlify`.
It uses `Cypress` for E2E testing.

-----

### A note to begin
Early in the build process, the API Keys were exposed through .env error. So, while I am aware that there is a historical issue with that data appearing in the Git logs, the API Key has since been updated and the .gitignore issue rectifed - and as such, the historical commits containing that data have not been filtered (so as to not lose project history unnecessarily).

### Quickstart
1) To build from the existing repo, clone from `https://github.com/elawilkinson/formula1formulas/`.
 -- Please note that currently there is currenlty only a `main, production branch`, without feature branches or a development branch. As such, any changes pushed will be continuously deployed to production -- 

2) Once the repo is cloned, use `npm i` to install dependencies and dev dependencies. 

3) Create a `.env` file at the root of the directory, and create a variable in this file called `REACT_APP_API_KEY`. (Please also double-check that the `.env` file is listed in `.gitignore`.)

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
3) Ensure that line 6 is *not* commented out (`import StaticRequestData...` should be readable)
4) Comment out line 14 (`</RequestData>`)
5) Ensure that line 13 is *not* commented out (`<StaticRequestData>` should be readable)
(This runs an alternative version of the `Request Data` component, which uses locally-available libraries rather than calling the API.)
6) Navigate to `statsdisplay.js`.
7) Comment out line 6 (`import DataDiveButtons...`)
8) Ensure that line 7 is *not* commented out (`import StaticDataDive....` should be readable)
9) Comment out line 39 (`<DataDiveButons>`)
10) Ensure that line 40 is *not* commented out (`<StaticDataDiveButtons> should be readable`)
(This ensures that the buttons rendering datasets are using the `libs` data rather than fetching from the API.)

-----

### Components
The following components make use of third-party libraries:
- `charts` - these make use of `chart.js`, which has React-specific documentation here (https://react-chartjs-2.js.org/examples).
- `buttons` - the buttons throughout the app use `AwesomeButton`, which has more information on the creator's GitHub (https://github.com/rcaferati/react-awesome-button). A key quirk of this component is that `onClick` is not a valid command; `onPress` must be used instead.
- the app also makes use of `smoothscroll` (https://www.npmjs.com/package/smoothscroll-polyfill)

`Notes on specific components - `

`App.js`
- This component has been kept intentionally clean.

`LandingInfo.js`
- This component is where any headline information about the app (e.g. its name or subtitle) should be changed.

`RequestData / StaticRequestData.js`
- This component renders 3 x data request buttons, as well as the statistics display area.
- The stats display area will not automatically display; it is controlled by state, so it will only be visible when the user has requested one of the data options.
- This component contains fetch requests to the API.

`StatsDisplay.js`
- This component conditionally renders data, per the user's request.
- It also conditionally renders the three further options, under the `data dives` header.

`DataDiveButtons.js`
- This component renders three instances of the `datasetButton`; one for each of the chart options given to the user. 
- Each of these buttons also renders its respective `chart`.
- Within the `DataDives` folder, there is also a `datawork.js` file, which retrieves API/library information and recomposes it into arrays/objects which are more easily read by the `charts.js` charts. 

`Charts`
- In each instance, these charts require a `labels` array, which will serve as the x axis labelling.
- They also require an array of `data`, which will be mapped through by the library and rendered as the datapoints on the graph. 
- NB in each instance, the `options` object for these charts have required an additonal line, `maintainAspectRatio: false`, as this allows the charts to be mobile responsive.  

`(An additional note that there is a component tree map available in the Planning folder`)

-----

### Styling notes
`Styling is centralised in the App.css file`
- The app currently makes use of a custom Google Font, `rubik`, which is linked as a sheet in `index.html`, and asserted as a `font-family` in `index.css`.
- In `App.css`, there are various `media queries` to give an optimised mobile experience - these are particularly useful for displaying the graphs under the `data dives` tab. 

-----

### Testing
`Cypress` has been used for E2E testing - the current tests are available in the `cypress` folder, under `e2e/spec.cy.js`.

These tests can be run with the script `npm run cypress:open`, which will open up the cypress dashboard and a separate browser window.

Currently, the tests follow user journeys - they check that components render correctly, fetch from the API, and return relevant information. 


-----

### Next iterations
Here are further areas of development for possible future iterations of F1F:
`Features`
- Allowing the user to select a specific year for Constructors & Drivers results (i.e. not just 2021)
- Comparing driver stats
- Comparing team stats
- Analysis of team performance by circuit, drivers and other factors
- Adding a navbar/footer to create a more cohesive brand/UX

`Technical`
- Expanding test coverage
- Simplifying components where possible

-----

### Notes & comments
- Please do get in touch with me (GitHub - @elawilkinson) for any further information, or feedback!
