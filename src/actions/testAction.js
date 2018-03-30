import axios from "axios"

import cst from '../constants/testConstant'

const testAction = {
    testAPIRequest: () => {
        return (dispatch) => {
            axios.get("/api/test")
                .then(data => {
                    console.log("Test Request!")
                    console.log("Result: " + JSON.stringify(data))
                    dispatch({
                        type: cst.TEST_RESULT,
                        payload: data
                    })
                })
                .catch(err => console.log("Request error: " + err))
        }

        // return (dispatch, getState) => {
        //     let state = getState() // if we need the State
        //     axios.post("/api/test")
        //         .then(data => {
        //             console.log("Test Request!")
        //             console.log("Result: " + JSON.stringify(data))
        //             dispatch({
        //                 type: cst.TEST_RESULT,
        //                 payload: data
        //             })
        //         })
        //         .catch(err => console.log("Request error: " + err))
        // }
    }
}

export default testAction