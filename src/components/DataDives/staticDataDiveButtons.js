import React from "react";
import * as smoothscroll from "smoothscroll-polyfill";

import {useState, useEffect} from 'react'

import { teamhistory } from "../../libs/teamhistory.js";
import { getFastestLaps } from './datawork.js';

import PolePositionsChart from '../Charts/PolePositionsChart.js'
import FastestLapChart from '../Charts/FastestLapChart.js';
import StartingGridChart from '../Charts/StartingGridChart.js';
import DataSetButton from '../DatasetButton/DatasetButton.js';
import BackToTopButton from '../BackToTopButton/BackToTopButton.js';
import CloseChartButton from '../CloseChartButton/CloseChartButton.js';

function StaticDataDiveButtons(){ 
    const [polePositions, setPolePositions] = useState(false);
    const [raceData, setRaceData] = useState(false);
    const [gridData, setGridData] = useState(false);
    const [fastestLaps, setFastestLaps] = useState([]);
    const [polePositionNumbers, setPolePositionNumbers] = useState([]);
    const [constructorList, setConstructorList] = useState([]);
    const [gridStartList, setGridStartList] = useState([]);
    const [showBackButton, setShowBackButon] = useState(false);    

    let polePos = [];
    let constructors = [];

    smoothscroll.polyfill();

    useEffect ( () => {
        setFastestLaps(getFastestLaps())
    }, [])

    function getPolePositions(){  
        window.scrollBy({ top: 600, left: 0, behavior: 'smooth' });
        setShowBackButon(true);
        for(let i=0; i<teamhistory.length; i++){
            constructors.push(teamhistory[i].name)
            if(teamhistory[i].pole_positions === null){
                polePos.push(0)
            }
            else{
                polePos.push(teamhistory[i].pole_positions)
            }    
        }
        setPolePositionNumbers(polePos);
        setConstructorList(constructors);
        setPolePositions(true);
        setGridData(false);
    }

    // There is a known bug in this function, whereby the smooth scroll doesn't reliably work
    function getRaceData(){  
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

export default StaticDataDiveButtons;
