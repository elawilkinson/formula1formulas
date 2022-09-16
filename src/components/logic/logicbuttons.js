import {useState, useEffect} from 'react'

import { teamhistory } from "../../libs/teamhistory.js";
import { getFastestLaps } from './datawork.js';

import Chart from "../Chart/chart.js";
import FastestLapChart from '../Chart/fastestlapchart.js';
import DataSetButton from '../DatasetButton/datasetbutton.js';
import CloseChartButton from '../CloseChartButton/closebutton.js';
import CloseLapsChartButton from '../CloseChartButton/closelapschartbutton.js';


function LogicButtons(){  
    const [polePositions, setPolePositions] = useState(false);
    const [raceData, setRaceData] = useState(false);
    const [fastestLaps, setFastestLaps] = useState([])
    const [polePositionNumbers, setPolePositionNumbers] = useState([]);
    const [constructorList, setConstructorList] = useState([]);
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
    }

    function getRaceData(){
        setRaceData(true)
    }

    console.log(fastestLaps)

    return(
        <>
            <DataSetButton dataName={"Pole positions"} getPolePositions={getPolePositions} />
            {polePositions ? (
                <div className="chart-container">
                    <Chart 
                        polePositionNumbers={polePositionNumbers}
                        constructorList={constructorList}
                        />
                    <CloseChartButton setPolePositions={setPolePositions}/>
                </div>
            ) : <></>}
            <DataSetButton dataName={"Race data"} getRaceData={getRaceData} />
            {raceData ? (
                <div className="chart-container">
                    <FastestLapChart 
                        fastestLaps={fastestLaps}
                        />
                    <CloseLapsChartButton setRaceData={setRaceData}/>
                </div>
            ) : <></>}
        </>
    )
}

export default LogicButtons
