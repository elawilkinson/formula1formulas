import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function CloseButton ({setShowRanking}) {

    function closeListings () {
        setShowRanking(false);
    }

    return(
        <div className="button-align-right">
                <AwesomeButton 
                    type="secondary" 
                    onPress={closeListings}>
                    Close stats
                </AwesomeButton>
            </div>
    )
}

export default CloseButton