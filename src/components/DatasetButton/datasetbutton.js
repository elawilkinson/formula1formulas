import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function DataSetButton ({dataName, getPolePositions, getRaceData, getGridData}) {

    function getDataSet () {
        if(dataName.includes('Pole')){
            getPolePositions()
        }
        else if(dataName.includes('Fastest')){
            getRaceData()
        }
        else if(dataName.includes('grid')){
            getGridData()
        }
    }

    return(
        <>
        <div className="dataset-button-container">
                <AwesomeButton
                    className="dataset-awesome-button"
                    onPress={getDataSet}
                    type="anchor">
                    <span className="generate-chart">
                        {dataName}
                    </span>                    
                </AwesomeButton>
            </div>
        </>


    )
}

export default DataSetButton