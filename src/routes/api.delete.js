import axios from "axios"

export default class DeleteData {
    constructor(){ }

    deleteAStudent= (sId) => {
        return axios.delete("/api/delete/student/" + sId)
    }

    deleteAInstructor= (iId) => {
        return axios.delete("/api/delete/instructor/" + iId)
    }

    deleteACourse= (cId) => {
        return axios.delete("/api/delete/course/" + cId)
    }
}