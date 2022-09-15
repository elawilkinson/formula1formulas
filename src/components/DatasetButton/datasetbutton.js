import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function DataSetButton ({getPolePositions}) {

    return(
        <div className="button-align-left">
                <AwesomeButton
                    onPress={getPolePositions}
                    type="secondary">
                    <span className="data-buttons">
                        Pole positions
                    </span>                    
                </AwesomeButton>
            </div>
    )
}

export default DataSetButton