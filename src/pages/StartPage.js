import React from "react"

import Text from "../components/Text"
import Alert from "../components/Alert"

export default function StartPage(props) {

    const [showAlert, isShowAlert] = React.useState(null)

    const setAlert = (type, text) => {
        isShowAlert({
            type: type,
            message: text
        })
    }
    
    return (
        <>
            <Text/>
            {showAlert && 
            <Alert content={showAlert}/>
            }
        </>
    )
}