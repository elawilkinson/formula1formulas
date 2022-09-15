import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function CloseButton ({setShowRanking}) {

    function closeListings () {
        setShowRanking(false);
    }

    return(
        <div className="button-align-right">
                <AwesomeButton
                    className="close-data-button" 
                    type="secondary" 
                    onPress={closeListings}>
                    <span className="data-buttons">
                    Close stats
                    </span>                   
                </AwesomeButton>
            </div>
    )
}

export default CloseButton