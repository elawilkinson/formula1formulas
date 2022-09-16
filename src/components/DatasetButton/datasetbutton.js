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
        <div className="button-align-left">
                <AwesomeButton
                    onPress={getDataSet}
                    type="secondary">
                    <span className="data-buttons">
                        {dataName}
                    </span>                    
                </AwesomeButton>
            </div>
        </>


    )
}

export default DataSetButton