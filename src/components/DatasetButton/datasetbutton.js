import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function DataSetButton ({dataName, getPolePositions, getRaceData}) {

    function getDataSet () {
        if(dataName.includes('Pole')){
            getPolePositions()
        }
        else if(dataName.includes('Race')){
            getRaceData()
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