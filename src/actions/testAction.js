import axios from "axios"

import cst from '../constants/testConstant'

const testAction = {
    testAPIRequest: () => {
        return (dispatch) => {
            const dpt = {
                name: "depart_1",
                budget: 1000000,
                startDate: "2018-03-30 04:05:09",
                administrator: "James Bond"
            }

            axios.post("/api/add/department", dpt)
                .then(data => {
                    console.log("Test Request!")
                    console.log("Result: " + JSON.stringify(data, null, 5))
                    dispatch({
                        type: cst.TEST_RESULT,
                        payload: data
                    })
                })
                .catch(err => console.log("Request error: " + err))
        }        
    }
}

export default testAction