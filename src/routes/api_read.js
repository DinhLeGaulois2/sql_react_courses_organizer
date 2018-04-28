import axios from "axios"

export default class ReadData {
    constructor(){ }

    getInstructors = (iId) => {
        return axios.get("/api/get/instructors")
    }

    getStudents = (iId) => {
        return axios.get("/api/get/students")
    }

    getCourses = (cId) => {
        return axios.get("/api/get/courses")
    }

    getDpts = (cId) => {
        return axios.get("/api/get/departments")
    }
}