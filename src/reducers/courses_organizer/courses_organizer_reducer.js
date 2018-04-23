import cst from '../../constants/courses_organizer/cst'

const initialStates = {
    data: [],
    status: cst.GET_DEPARTMENTS,
    menuStatus: cst.MENU_NEUTRAL
}

const reservation = (state = initialStates, action) => {
    switch (action.type) {
        case cst.ADD_INSTRUCTOR: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.ADD_INSTRUCTOR_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.ADD_STUDENT: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.ADD_STUDENT_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.ADD_DEPARTMENT: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.ADD_DEPARTMENT_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.ADD_COURSE: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.ADD_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.ADD_INSTRUCTOR_COURSE: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.ADD_INSTRUCTOR_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.ADD_STUDENT_COURSE: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.ADD_STUDENT_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_STUDENT_BY_ID: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.GET_STUDENT_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_STUDENTS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.GET_STUDENTS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_INSTRUCTOR_BY_ID: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.GET_INSTRUCTOR_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_INSTRUCTORS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.GET_INSTRUCTORS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_COURSE_BY_ID: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.GET_COURSE_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_COURSES: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.GET_COURSES_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_DEPARTMENT_BY_ID: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.GET_DEPARTMENT_BY_ID_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.GET_DEPARTMENTS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.GET_DEPARTMENTS_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.SET_COURSE_ONSITE: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.SET_COURSE_ONSITE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.SET_COURSE_ONLINE: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.SET_COURSE_ONLINE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.UPDATE_STUDENT_GRADE: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.UPDATE_STUDENT_GRADE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.DELETE_DPT: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.DELETE_DPT_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.DELETE_INSTRUCTOR: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.DELETE_INSTRUCTOR_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.DELETE_STUDENT: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.DELETE_STUDENT_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.DELETE_COURSE: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }
        case cst.DELETE_COURSE_SUCCESS: {
            return Object.assign({}, state, {
                data: action.payload,
                status: action.type
            })
        }

        case cst.MENU_ADD: {
            return Object.assign({}, state, {
                menuStatus: action.type
            })
        }
        case cst.MENU_DISPLAY: {
            return Object.assign({}, state, {
                menuStatus: action.type
            })
        }
    }
    return state;
}

export default reservation