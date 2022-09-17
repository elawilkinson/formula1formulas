import {useState, useEffect} from 'react'

import { teamhistory } from "../../libs/teamhistory.js";
import { getFastestLaps } from './datawork.js';
// import { getStartingGridData } from './datawork.js';

import Chart from "../Chart/chart.js";
import FastestLapChart from '../Chart/fastestlapchart.js';
import StartingGridChart from '../Chart/startinggridchart.js';
import DataSetButton from '../DatasetButton/datasetbutton.js';
import CloseChartButton from '../CloseChartButton/closebutton.js';
import CloseLapsChartButton from '../CloseChartButton/closelapschartbutton.js';


function LogicButtons(){  
    const [polePositions, setPolePositions] = useState(false);
    const [raceData, setRaceData] = useState(false);
    const [gridData, setGridData] = useState(false);
    const [fastestLaps, setFastestLaps] = useState([]);
    const [polePositionNumbers, setPolePositionNumbers] = useState([]);
    const [constructorList, setConstructorList] = useState([]);
    const [gridStartList, setGridStartList] = useState([]);
    let polePos = [];
    let constructors = [];

    useEffect ( () => {        
        setFastestLaps(getFastestLaps())
    }, [])

    function getPolePositions(){  
        for(let i=0; i<teamhistory.length; i++){
            constructors.push(teamhistory[i].name)
            if(teamhistory[i].pole_positions === null){
                polePos.push(0)
            }
            else{
                polePos.push(teamhistory[i].pole_positions)
            }    
        }
        setPolePositionNumbers(polePos)
        setConstructorList(constructors)
        setPolePositions(true)
        setGridData(false)
    }

    function getRaceData(){
        setRaceData(true)
        setGridData(false)
        setPolePositions(false)
    }

    function getGridData(){
        // getStartingGridData();
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
                    <Chart 
                        polePositionNumbers={polePositionNumbers}
                        constructorList={constructorList}
                        />
                    <CloseChartButton setPolePositions={setPolePositions}/>
                </div>
            ) : <></>}
            
            {raceData ? (
                <div className="chart-container">
                    <FastestLapChart 
                        fastestLaps={fastestLaps}
                        />
                    <CloseLapsChartButton setRaceData={setRaceData}/>
                </div>
            ) : <></>}

            {gridData ? (
                <div className="chart-container">
                    <StartingGridChart gridStartList={gridStartList}/>
                    <CloseLapsChartButton setGridData={setGridData}/>
                </div>
            ) : <></>}
        </>
    )
}

export default LogicButtons
