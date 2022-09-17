import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function CloseLapsChartButton ({setRaceData, setGridData}) {

    function closeListings () {
        setRaceData(false);
        setGridData(false);
    }

    return(
        <div className="exit-chart-button">
                <AwesomeButton 
                    type="secondary" 
                    onPress={closeListings}>
                    <span className="data-buttons-bl">
                        x
                    </span>                    
                </AwesomeButton>
            </div>
    )
}

export default CloseLapsChartButton