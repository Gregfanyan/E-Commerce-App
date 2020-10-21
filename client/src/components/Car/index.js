import React from 'react'
import { connect } from 'react-redux'
import { buyCar } from '../../redux'

function Car(props) {
    return (
        <div>
            <h2>Number of cars - {props.numOfCars} </h2>
            <button onClick={props.buyCar}>Buy Car</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCars: state.car.numOfCars
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCar: () => dispatch(buyCar())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Car)