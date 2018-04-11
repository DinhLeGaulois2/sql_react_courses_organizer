import axios from "axios"

import cst from '../constants/testConstant'

const testAction = {
    testAPIRequest: () => {
        let obj = {
            id: 1,
            budget: 250000,
        }
        return (dispatch) => {
            axios.put("/api/put/department/", obj)
                .then(data => {
                    console.log("Result: " + JSON.stringify(data, null, 5))
                })

            // axios.get("/api/get/students")
            //     .then(data => {
            //         console.log("Result: " + JSON.stringify(data, null, 5))
            //     })
        }
    }
}

export default testAction