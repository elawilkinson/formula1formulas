import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import * as smoothscroll from "smoothscroll-polyfill";

function BackToTopButton () {
    smoothscroll.polyfill();


    function collapseData(){        
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }

    return(
        <div className="button-align-right">
                <AwesomeButton
                    className="close-data-button" 
                    type="secondary" 
                    onPress={collapseData}>
                    <span className="data-buttons-bl">
                    Back to top
                    </span>                   
                </AwesomeButton>
            </div>
    )
}

export default BackToTopButton