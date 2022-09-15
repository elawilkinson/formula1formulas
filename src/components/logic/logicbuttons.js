import {useState} from 'react'

import { teamhistory } from "../../libs/teamhistory.js";

import Chart from "../Chart/chart.js";
import DataSetButton from '../DatasetButton/datasetbutton.js';
import CloseChartButton from '../CloseChartButton/closebutton.js';


function LogicButtons(){  
    const [showChart, setShowChart] = useState(false);
    const [polePositionNumbers, setPolePositionNumbers] = useState([])
    const [constructorList, setConstructorList] = useState([])
    let polePos = []
    let constructors = []  

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
        setShowChart(true)
        setPolePositionNumbers(polePos)
        setConstructorList(constructors)
    }


    return(
        <>
            <DataSetButton getPolePositions={getPolePositions}/>
            {showChart ? (
                <div className="chart-container">
                    <Chart 
                        polePositionNumbers={polePositionNumbers}
                        constructorList={constructorList}
                        />
                    <CloseChartButton setShowChart={setShowChart}/>
                </div>
            ) : <></>}
        </>
    )
}

export default LogicButtons
