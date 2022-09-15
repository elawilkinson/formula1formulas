import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function CloseChartButton ({setShowChart}) {

    function closeListings () {
        setShowChart(false);
    }

    return(
        <div className="button-align-right">
                <AwesomeButton 
                    type="secondary" 
                    onPress={closeListings}>
                    Close chart
                </AwesomeButton>
            </div>
    )
}

export default CloseChartButton