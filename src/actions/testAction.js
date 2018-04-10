import axios from "axios"

import cst from '../constants/testConstant'

const testAction = {
    testAPIRequest: () => {
        return (dispatch) => {
            axios.get("/api/get/instructors")
                .then(data => {
                    console.log("Result: " + JSON.stringify(data, null, 5))
                })
        }
    }
}

export default testAction