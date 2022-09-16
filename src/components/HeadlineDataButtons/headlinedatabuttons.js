import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function HeadlineDataButtons () {
    function getDataSet(){
        
    }

    return(
        <>
            <AwesomeButton type="anchor" 
                onPress={getDataSet}> 
                <span className="data-buttons" >
                    2021 | Constructor rankings 
                </span> 
            </AwesomeButton>

        </>
    )
}

export default HeadlineDataButtons

