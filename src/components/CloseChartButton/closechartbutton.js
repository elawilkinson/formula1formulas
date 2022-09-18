import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import * as smoothscroll from "smoothscroll-polyfill";

function CloseChartButton ({setPolePositions, setGridData, setRaceData, dataName }) {
    smoothscroll.polyfill();

    function closeListings () {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        if(dataName.includes('Pole')){
            setPolePositions(false);
        }
        else if(dataName.includes('Race')){
            setRaceData(false);
        }
        else if(dataName.includes('grid')){
            setGridData(false);
        }       
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