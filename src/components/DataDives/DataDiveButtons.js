import {useState, useEffect} from 'react'

import { teamhistory } from "../../libs/teamhistory.js";
import { getFastestLaps } from './datawork.js';
// import { getStartingGridData } from './datawork.js';

import PolePositionsChart from "../Charts/polepositionschart.js";
import FastestLapChart from '../Charts/fastestlapchart.js';
import StartingGridChart from '../Charts/startinggridchart.js';
import DataSetButton from '../DatasetButton/datasetbutton.js';
import BackToTopButton from '../BackToTopButton/BackToTopButton.js';
import CloseChartButton from '../CloseChartButton/closechartbutton.js';


function DataDiveButtons(){  
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

    useEffect ( () => {        
        setFastestLaps(getFastestLaps())
    }, [])

    function getPolePositions(){  
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

    function getRaceData(){
        setShowBackButon(true);
        setRaceData(true);
        setGridData(false);
        setPolePositions(false);
    }

    function getGridData(){
        setShowBackButon(true);
        setGridData(true);
        setGridStartList(fastestLaps)
        setPolePositions(false);
        setRaceData(false);        
    }

    return(
        <>
            <div className="data-dive-buttons">
                <DataSetButton dataName={"Pole positions"} getPolePositions={getPolePositions} />
                <DataSetButton dataName={"Race data"} getRaceData={getRaceData} />
                <DataSetButton dataName={"Starting grids"} getGridData={getGridData} />
            </div>
            {polePositions ? (
                <div className="chart-container">
                    <PolePositionsChart 
                        polePositionNumbers={polePositionNumbers}
                        constructorList={constructorList}
                        />
                    <CloseChartButton dataName={"Pole positions"} setPolePositions={setPolePositions} />
                </div>
            ) : <></>}
            
            {raceData ? (
                <div className="chart-container">
                    <FastestLapChart 
                        fastestLaps={fastestLaps}
                        />
                    <CloseChartButton dataName={"Race data"} setRaceData={setRaceData}/>
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
