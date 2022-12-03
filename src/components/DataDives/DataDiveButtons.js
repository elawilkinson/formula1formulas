import React from "react";
import * as smoothscroll from "smoothscroll-polyfill";

import {useState, useEffect} from 'react'

import PolePositionsChart from "../Charts/polepositionschart.js";
import FastestLapChart from '../Charts/fastestlapchart.js';
import StartingGridChart from '../Charts/startinggridchart.js';
import DataSetButton from '../DatasetButton/datasetbutton.js';
import BackToTopButton from '../BackToTopButton/BackToTopButton.js';
import CloseChartButton from '../CloseChartButton/closechartbutton.js';

function DataDiveButtons({raceListings, teamHistory}){ 
    // These states determine which data is rendered in the StatsDisplay area
    const [polePositions, setPolePositions] = useState(false);
    const [raceData, setRaceData] = useState(false);
    const [gridData, setGridData] = useState(false);
    const [showBackButton, setShowBackButon] = useState(false);

    // These states are used to store data taken from the API and transferred to the Charts
    const [fastestLaps, setFastestLaps] = useState([]);
    const [polePositionNumbers, setPolePositionNumbers] = useState([]);
    const [constructorList, setConstructorList] = useState([]);
    const [gridStartList, setGridStartList] = useState([]);    

    let polePos = [];
    let constructors = [];
    let lapTimes = [];
    let grandPrixNames = [];
    let timesOnly =[];

    smoothscroll.polyfill();

    useEffect ( () => {
        for(let i=0; i<raceListings.length; i++){
            let x = raceListings[i].fastest_lap.time;        
            if(x){
                let y = Number(`${x[2]}${x[3]}`)
                let seconds = Number(60 + y)
                let miliseconds = Number(`${x[5]}${x[6]}${x[7]}`)
                let laptime = Number(`${seconds}.${miliseconds}`)
                lapTimes.push({
                    'Race' : raceListings[i].competition.name,
                    'Lap time' : laptime,
                    'Driver': raceListings[i].fastest_lap.driver.id
                })
                grandPrixNames.push(raceListings[i].competition.name)
                timesOnly.push(laptime)
            }
        }
    }, [grandPrixNames, lapTimes, raceListings, timesOnly])

    function getPolePositions(){  
        window.scrollBy({ top: 600, left: 0, behavior: 'smooth' });
        setShowBackButon(true);
        for(let i=0; i<teamHistory.length; i++){
            constructors.push(teamHistory[i].name)
            if(teamHistory[i].pole_positions === null){
                polePos.push(0)
            }
            else{
                polePos.push(teamHistory[i].pole_positions)
            }    
        }
        setPolePositionNumbers(polePos);
        setConstructorList(constructors);
        setPolePositions(true);
        setGridData(false);
    }

    function getRaceData(){  
        setFastestLaps([lapTimes, grandPrixNames, timesOnly])
        setPolePositions(false); 
        window.scrollBy({ top: 1000, left: 0, behavior: 'smooth' }); 
        setShowBackButon(true);
        setRaceData(true);
        setGridData(false);        
    }

    function getGridData(){       
        setShowBackButon(true);
        setGridData(true);
        setGridStartList(fastestLaps)
        setPolePositions(false);
        setRaceData(false);       
        window.scrollBy({ top: 1500, left: 0, behavior: 'smooth' }); 
    }

    return(
        <>
            <div className="data-dive-buttons">
                <DataSetButton dataName={"Pole positions by team"} getPolePositions={getPolePositions} />
                <DataSetButton dataName={"Fastest Laptimes (2021)"} getRaceData={getRaceData} />
                <DataSetButton dataName={"Starting grids by team (2021)"} getGridData={getGridData} />
            </div>
            
            {polePositions ? (
                <div className="chart-container">
                    <PolePositionsChart 
                        polePositionNumbers={polePositionNumbers}
                        constructorList={constructorList}
                        />
                    <CloseChartButton dataName={"Pole positions by team"} setPolePositions={setPolePositions} />
                </div>
            ) : <></>}
            
            {raceData ? (
                <div className="chart-container">
                    <FastestLapChart id="fastest-lap-chart"
                        fastestLaps={fastestLaps}
                        />
                    <CloseChartButton dataName={"Fastest Laptimes (2021)"} setRaceData={setRaceData}/>
                </div>
            ) : <></>}

            {gridData ? (
                <div className="chart-container">
                    <StartingGridChart gridStartList={gridStartList}/>
                    <CloseChartButton dataName={"Starting grids"} setGridData={setGridData}/>
                </div>
            ) : <></>}

            {showBackButton ? (
                <BackToTopButton />
            ) : <> </> }
        </>
    )
}

export default DataDiveButtons;
