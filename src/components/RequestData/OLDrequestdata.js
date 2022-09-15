import React, {useState} from 'react'

import DataMenu from '../DataMenu/datamenu.js'

function RequestData ({setShowRanking}) {

    const[showDataMenu, setShowDataMenu] = useState(false)

    function getStats(){
        setShowRanking(true)
    }

    function showOptions(){
        setShowDataMenu(true)
    }

    function hideOptions(){
        setShowDataMenu(false)
    }

    return(
        <>
            <p>F O R M U L A</p>
            <button onClick={getStats}> 2021 rankings </button>
            <button onClick={showOptions}> More data </button>
            {showDataMenu ? (
                <>
                    <DataMenu />
                    <button onClick={hideOptions}> Close data </button>
                </>
            ) : <></>}
        </>
    )
}

export default RequestData;