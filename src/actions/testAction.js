import axios from "axios"

import cst from '../constants/testConstant'

const testAction = {
    testAPIRequest: () => {
        return (dispatch) => {
            // const obj = {   // new Instructor
            //     lastName: "Bond",
            //     firstName: "James",
            //     hireDate: "04/02/2018",
            //     enrollmentDate: "04/02/2018",
            //     type: 'instructor'

            // }
            // axios.post("/api/add/course", obj)
            //     .then(data => {
            //         console.log("Test Request!")
            //         console.log("Result: " + JSON.stringify(data, null, 5))
            //         //         dispatch({
            //         //             type: cst.TEST_RESULT,
            //         //             payload: data
            //     })
            //     .catch(err => console.log("Request error: " + err))

            // const obj = { // new Department
            //     name: "depart_1",
            //     budget: 1000000,
            //     startDate: "2018-03-30 04:05:09",
            //     administrator: "James Bond"
            // }

            // axios.post("/api/add/department", obj)
            //     .then(data => {
            //         console.log("Test Request!")
            //         console.log("Result: " + JSON.stringify(data, null, 5))
            //         //         dispatch({
            //         //             type: cst.TEST_RESULT,
            //         //             payload: data
            //     })
            //     // })
            //     .catch(err => console.log("Request error: " + err))

            // const obj = { // new course
            //     courseId: "course_1",
            //     title: "First Course",
            //     credits: "3",
            //     dptId: 1
            // }

            // axios.post("/api/add/course", obj)
            //     .then(data => {
            //         console.log("Test Request!")
            //         console.log("Result: " + JSON.stringify(data, null, 5))
            //         //         dispatch({
            //         //             type: cst.TEST_RESULT,
            //         //             payload: data
            //     })
            //     // })
            //     .catch(err => console.log("Request error: " + err))

            const obj = { // new instructor-course
                instructorId: 1,
                courseId: 1
            }

            axios.get("/api/get/students")
                .then(data => {
                    console.log("Result: " + JSON.stringify(data, null, 5))
                    //         dispatch({
                    //             type: cst.TEST_RESULT,
                    //             payload: data
                })
                // })
                .catch(err => console.log("Request error: " + err))
        }
    }
}

export default testAction