import cst from '../constants/testConstant'

const testReducer = (state = {
    data: {}
}, action) => {
    switch (action.type) {
        case cst.TEST_RESULT: {
            return Object.assign({}, state, {
                data: action.payload
            })
        }
    }
    return state;
}

export default testReducer