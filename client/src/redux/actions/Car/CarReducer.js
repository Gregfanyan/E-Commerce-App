import { BUY_CAR } from './CarTypes'

const initialState = {
    numOfCars: 10
}

const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAR: return {
            ...state,
            numOfCars: state.numOfCars - action.payload
        }

        default: return state
    }
}

export default carReducer
