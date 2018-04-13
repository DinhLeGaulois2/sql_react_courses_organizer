import axios from "axios"

import cst from '../constants/testConstant'

const testAction = {
    testAPIRequest: () => {
        let obj = {
            title: "Self Course",
            credits: "9",
            departmentId: 1
        }
        return (dispatch) => {
            axios.post("/api/add/department", obj)
                .then(data => {
                    console.log("Result: " + JSON.stringify(data, null, 5))
                }).catch(err => console.log(JSON.stringify(err, null, 5)))

            // axios.get("/api/get/students")
            //     .then(data => {
            //         console.log("Result: " + JSON.stringify(data, null, 5))
            //     })
        }
    }
}

export default testAction