import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function CloseChartButton ({setPolePositions}) {

    function closeListings () {
        setPolePositions(false);
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

export default CloseChartButton