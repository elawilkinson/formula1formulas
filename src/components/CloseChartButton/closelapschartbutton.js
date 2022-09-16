import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function CloseLapsChartButton ({setRaceData}) {

    function closeListings () {
        setRaceData(false);
    }

    return(
        <div className="exit-chart-button">
                <AwesomeButton 
                    type="secondary" 
                    onPress={closeListings}>
                    <span className="data-buttons">
                        x
                    </span>                    
                </AwesomeButton>
            </div>
    )
}

export default CloseLapsChartButton