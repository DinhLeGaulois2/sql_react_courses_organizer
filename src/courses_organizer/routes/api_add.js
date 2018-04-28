import axios from "axios"

export default class AddData {
    constructor(){ }
    
    addCourse= (data) => {
        return axios.post("/api/add/course", data)
    }

    addDeparment= (data) => {
        let result = []
        return axios.post("/api/add/department", result)
    }

    addInstructor= (data) => {
        let obj = []
        return axios.post("/api/add/instructor", obj)
    }

    addStudent= (data) => {
        let obj = []
        return axios.post("/api/add/student", obj)
    }

    addInstructorCourse= (data) => {
        return axios.post("/api/add/course-instructor", data)
    }

    addOnlineCourse= (data) => {
        return axios.post("/api/set/course/online", data)
    }

    addOnsiteCourse= (data) => {
        return axios.post("/api/set/course/onsite", data)
    }

    addStudentCourse= (data) => {
        return axios.post("/api/add/course-student", data)
    }
}